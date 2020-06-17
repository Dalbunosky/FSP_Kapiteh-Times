import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import MessagesContainer from './greeting/messages_container';

export const Header = () => (
    <header>
        <div>
            <Link to="/" className="header-link">
            {/* <h1>Logo</h1> */}
            <h1>Kapiteh Times</h1>
            </Link>

            {/* <nav className="nav-list"> */}
                {/* <a className="nav-link-item" href="#/meetups">MeetUps</a>
                <p>   </p>
                <a className="nav-link-item" href="#/hosting">Hosting</a>
                <p>   </p>
                <a className="nav-link-item" href="#/about">About</a> */}
            <GreetingContainer />
            {/* </nav> */}
        </div>
        {/* <div className="msg-bar">
            <MessagesContainer />
        </div> */}
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
            <br/>
            <a className="white bold" href="#/terms">Terms of Service</a>
            <a className="white bold" href="#/privacy">Privacy Policy</a>
            </div>

            <div className="footer-speech">
            <p className="white">Kapiteh Times is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.</p>
            <p className="white">We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.</p>
            </div>
        </div>
    </footer>
);

