import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// SignIn, SignUp pages
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';

// Profile pages
import ProfileContainer from './profile_pages/profile_container';
import EditProfileContainer from './profile_pages/edit_profile_container';
import HistoryContainer from './profile_pages/history_container';

// Meetup pages
import MeetUpIndexContainer from './meetup_pages/all_meetups_container'; // Shows index of all meetups
import MeetUpShowContainer from './meetup_pages/meetup_container'; // Shows details of each meetup
// import MeetUpFormContainer from './meetup_form/meetup_form_container';
import NewMeetUpContainer from './meetup_pages/new_meetup_container';
import EditMeetUpContainer from './meetup_pages/edit_meetup_container';

import { AuthRoute, ProtectedRoute, HostRoute, AdminRoute } from '../util/route_util';

//Header, footer
import { Header, Footer } from './molding.jsx';

// Non-changing pages
import Home from './non_changing/home';
import About from './non_changing/about';
import Hosting from './non_changing/hosting';
import Terms from './non_changing/terms';
import Privacy from './non_changing/privacy';
import BadPage from './non_changing/oops';

const App = () => (
  <div>
    <Header />

    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/hosting" component={Hosting} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />

        <AuthRoute exact path="/signin" component={SignInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />

        <ProtectedRoute path="/profile/edit" component={EditProfileContainer} />
        <ProtectedRoute path="/profile/history" component={HistoryContainer} />
        <ProtectedRoute path="/profile" component={ProfileContainer} />

        {/* <Route exact path="/meetups" component={MeetUpIndexContainer} /> */}
        {/* <Route exact path="/meetups/:meetupId" component={MeetUpShowContainer} /> */}


        {/* Host only routes, for creating meetups */}
        <HostRoute exact path="/meetups/new" component={NewMeetUpContainer} />
        <HostRoute exact path="/meetups/edit" component={EditMeetUpContainer} />
        
        <Route to="/oops" component={BadPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
