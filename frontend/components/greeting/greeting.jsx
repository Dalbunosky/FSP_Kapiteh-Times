import React from 'react';
import { Link } from 'react-router-dom';

// // Function to change display based on dimension
// const navToggleResize = function(e){
//   e.preventDefault();
//   let navMenu = document.getElementsByClassName("nav-list");
//   if(window.getComputedStyle(navMenu[0]).getPropertyValue("display") === "none"){
//       navMenu[0].style.display = "flex";
//   }
//   else{
//       navMenu[0].style.display = "none";
//   }
// }

const Greeting = ({ currentUser, signout }) => {

  React.useEffect(() => {
    function navToggleResize() {
      let navMenu = document.getElementsByClassName("nav-list");
      if(window.innerWidth > 899){
        navMenu[0].style.display = "flex";
        navMenu[0].style.background = "none";
      }
      else{
        navMenu[0].style.display = "none";
        navMenu[0].style.background = "rgba(247, 201, 77, 0.7)";
      }
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    window.addEventListener('resize', navToggleResize)
  })

  const sessionLinks = () => (
    <nav className="nav-list">
      <a className="nav-link-item white bold" href="#/meetups">MeetUps</a>
      <a className="nav-link-item white bold" href="#/hosting">Hosting</a>
      <a className="nav-link-item white bold" href="#/about">About</a>
      <a id="signin" className="nav-link-item white bold" href="#/signin">Sign In</a>
      <a id="signup" className="nav-link-item white bold" href="#/signup">Sign Up</a>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="nav-list">
        <a className="nav-link-item white bold" href="#/meetups">MeetUps</a>
        <a className="nav-link-item white bold" href="#/hosting">Hosting</a>
        <a className="nav-link-item white bold" href="#/about">About</a>
        <a className="nav-link-item white bold" href="#/profile">Profile</a>
        <a className="nav-link-item white bold" onClick={signout}>Log Out</a>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
