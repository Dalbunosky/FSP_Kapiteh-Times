import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Take to profile after logging in
const Auth = ({ component: Component, path, loggedIn, exact }) => { //(
  // console.log();
  return (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/profile" />
      // <Redirect to="/" />
    )
  )} />
);
};

// Take to login if not logged in
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/signin" />
    )
  )} />
);

// Host only routes, CHANGE LATER TO HOST ONLY
const Hosted = ({ component: Component, path, isHost, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     isHost ? ( // Criteria: host_status true?
      <Component {...props} />
    ) : (
      <Redirect to="/profile" />
    )
  )} />
);

// Admin only route
const Admin = ({ component: Component, path, isAdmin, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     isAdmin ? ( // currentUser.name == admin?
      <Component {...props} />
    ) : (
      <Redirect to="/profile" />
    )
  )} />
);

const mapSTP = state => (
  {loggedIn: Boolean(state.session.id),
  isHost: Boolean(state.session.id && state.users[state.session.id].host_status),
  isAdmin: Boolean(state.session.id && state.users[state.session.id].name == ("admin" || "DemoAdmin"))
  }
);


export const AuthRoute = withRouter(connect(mapSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mapSTP)(Protected));
export const HostRoute = withRouter(connect(mapSTP)(Hosted));
export const AdminRoute = withRouter(connect(mapSTP)(Admin));
