import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { clearMessage } from "../../actions/message_actions";
// /about
// About
// Intro Diagram
// Paragraphs, history
const About = ({clearMessage}) => {
    useEffect(() => {
        return () => {
            clearMessage()
        }
    }, [])
    return(
        <div className="basic-page">
            <div className="welcome">
                <img src={window.staticImages.table}/>
                <span>
                    About Kapiteh Times <br/>
                    <p style={{fontsize: "10px"}}><br/>The mock project that could've bought people together.</p>
                </span>
            </div>

            {/* <h1 className="padding-30">About</h1> */}
            <div className="about">
                <h3>This is my project.</h3>

                <p>
                    Kapiteh Times is a mock project that simulates the website Tea With Strangers, 
                    a community organization that's all about making our cities feel more like 
                    neighborhoods by breaking barriers between strangers.
                </p>

                <p>
                    This website could allow different people to host and/or join meetups where 
                    strangers get to meet and have a chat about their topic of choice. To use the 
                    service, each member would need to sign up first with their name, an email 
                    address to contact and sign in with, and their home region. Each meetup is 
                    started by a host who can determine the location, time, and size of the meetup. 
                    The host would need to have more information as they are who lost guests contact. 
                    Both account and meetup information can be edited until the meetup is in the past.
                </p>
                <h4>What does this have at all to do with Kapiteh Times being a mock project?</h4>

                <p>
                    I created this website as a personal project and platform to practice my coding skills 
                    and have fun while at it.
                </p>

                <p>
                    Though related, software engineering is a relatively new field of work for me. I came 
                    from a mechanical engineering background, where programming does exist, but used mostly 
                    in a technical manner that rarely ventured outside of data processing. APIs, UIs and 
                    the like are subjects I previously had no exposure on. This project lets me learn, 
                    exercise, and hone my skills in software development, and more importantly, expose 
                    myself to new languages.
                </p>

                <p>
                    The website is an ongoing project with improvements being made whenever changes are 
                    necessary or new ideas come to mind and corresponding features are added.
                </p>
                
                <p>
                    This being a mock project means that it's not intended for actual use: 
                </p>
                <br/>
                <p style={{marginLeft: "30px"}}>
                        I won't be monitoring or fixing issues in real time though, so please do not 
                        actually use this website for meetups. Treat it for what it is, a mock up, a 
                        place for you to have fun turning the wheels and pressing the buttons.
                </p>
                    
                {/* <img src={window.staticImages.profilePic} /> */}
                <h3>Who is behind all of this?</h3>
                <p>
                    Hi, I'm Chi Yung Lee, and I created Kapiteh Times. If you'd like to have a chat or 
                    think this site needs an improvement you had thought of, you can contact me through LinkedIn. I'm 
                    open to new opportunities as well.
                </p>
            </div>

        </div>
)}

const mapDTP = dispatch => ({
    clearMessage: () => dispatch(clearMessage())
});

export default connect(null,mapDTP)(About);