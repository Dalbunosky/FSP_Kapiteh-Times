import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import MessageContainer from './greeting/message_container';


// Give button an onclick function. Put function in util?
const navToggle = function(e){
    e.preventDefault();
    let navMenu = document.getElementsByClassName("nav-list");
    if(window.getComputedStyle(navMenu[0]).getPropertyValue("display") === "none"){
        // navMenu[0].style.animation = "drop 1s linear";
        navMenu[0].style.display = "flex";
    }
    else{
        // navMenu[0].style.animation = "rise 1s linear";
        navMenu[0].style.display = "none";
    }
}

export const Header = () => (
    <header>
        <div className="header">
            <Link to="/" className="header-link">
            <h1>Kapiteh Times</h1>
            </Link>
            <button id="nav-button" onClick={navToggle}><img src={window.staticImages.menuIcon}/></button>
            <GreetingContainer />
        </div>
        <MessageContainer />
    </header>
);

export const Footer = () => (
    <footer>
        <div className="footer">
            <div className="footer-links">
                <a className="white bold" href="#/about">About</a>
                <a className="white bold" href="#/hosting">Hosting</a>
                <a className="white bold" href="#/meetups">Meetups</a>
                <a className="white bold" target="_blank" href="https://dalbunosky.wordpress.com" alt="My Portfolio Page">Portfolio</a>
                <a className="white bold" target="_blank" href="https://github.com/Dalbunosky/FSP_ChaiMeetsChurros" alt="My Github Page">Github</a>
                {/* <br/> */}
                {/* <a className="white bold" href="#/terms">Terms of Service</a> */}
                <a className="white bold" href="#/disclaimer">Disclaimer</a>
                <div className="footer-buttons">
                    <a href="https://github.com/Dalbunosky/FSP_Kapiteh-Times/"><img src={window.staticImages.github}/></a>
                    <a href="https://www.linkedin.com/in/chi-yung-lee-9ab28539/"><img src={window.staticImages.linkedin}/></a>
                </div>
            </div>

            <div className="footer-speech">
            <p className="white">Kapiteh Times is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.</p>
            <p className="white">We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.</p>
            </div>
        </div>
    </footer>
);

