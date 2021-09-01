import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { clearMessage } from "../../actions/message_actions";
// /Disclaimer
// Plain text disclaimer information
const Disclaimer = ({clearMessage}) => {
    useEffect(() => {
        return () => {
            clearMessage()
        }
    }, [])
    return(
        <div className="legalText">
            
            <h1>Disclaimer</h1>
            <p>Last updated July 11, 2020</p>
            <p>Thank you for trying out Kapiteh Times ("website"). 
                This website is a personal full-stack project used to practice my 
                software development skills by building a meet-up website 
                that is inspired and functions along the lines of the website 
                Tea With Strangers. </p>
            {/* <p>The website, if used in the actual manner, helps connect people together
                via meetings. The idea is like a blind date, but you are just meeting 
                as a group, perhaps over coffee and tea.</p> */}
            <p>However, as you play around with this website, PLEASE DO NOT USE ANY 
                REAL PERSONAL INFORMATION. I don't have the ability or knowledge to 
                monitor all activities and prevent theft, fraud, or any other misuse 
                of said information on the website, and am not responsible for any 
                mishaps you encounter. I am not responsible for lost/stolen information.</p>
                
            <p> Also, please do not use this website for actual meetups. The database 
                is periodically wiped and refreshed, and you will lose your plans.</p>
            <p>This is a personal project with some help from peers. It is purely 
                a practice in coding and does not generate any revenue.</p>
            <p>If you have a need or opportunity and believe that I would be a good fit, 
                please feel free to contact me on <a href="https://www.linkedin.com/in/chi-yung-lee-9ab28539/">LinkedIn</a>.
                </p>
        </div>
    )
}

const mapDTP = dispatch => ({
    clearMessage: () => dispatch(clearMessage())
});

export default connect(null,mapDTP)(Disclaimer);
