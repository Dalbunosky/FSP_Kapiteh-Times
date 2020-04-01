import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signout }) => {
  const sessionLinks = () => (
    <nav className="nav-list">
      <a className="nav-link-item" href="#/meetups">MeetUps</a>
      <a className="nav-link-item" href="#/hosting">Hosting</a>
      <a className="nav-link-item" href="#/about">About</a>
      <a id="signin" className="nav-link-item" href="#/signin">Sign In</a>
      <a id="signup" className="nav-link-item" href="#/signup">Sign Up</a>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="nav-list">
      <a className="nav-link-item" href="#/meetups">MeetUps</a>
      <a className="nav-link-item" href="#/hosting">Hosting</a>
      <a className="nav-link-item" href="#/about">About</a>
      <a className="nav-link-item" href="#/profile">Profile</a>
      {/* <button className="nav-link-item" onClick={signout}>Log Out</button> */}
      <a className="nav-link-item" onClick={signout}>Log Out</a>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
