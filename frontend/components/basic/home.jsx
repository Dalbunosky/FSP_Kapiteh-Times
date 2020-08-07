import React from 'react';
// /hosting
// Hosting
// Explain the redirect in main
// What process you would do
// Button: Email
export default () => (
    <div className="basic-page">
        <div className="welcome">
            <img src={window.staticImages.groupChat}/>
            <span>Coffee or Tea?</span>
            {/* <span>Coffee or Tea? </span> */}
        </div>

        <div className="main-one">
            <div className="process">
                <h3>Arrive for a drink and some chat</h3>
                <p>Join the host and other hosts.</p>
            </div>
            <div className="process">
                <h3>Enjoy some big-talk</h3>
                <p>Get passionate and talk your heart out about anything.</p>
            </div>
            <div className="process">
                <h3>See what happens</h3>
                <p>Make friends. See it from the other POV. Or not. Doesn't matter.</p>
            </div>
        </div>

        <div className='main-two'>
            <p>So why are people doing it?</p>
            <div className="reason">
                <div className="reason-image"><img src={window.staticImages.reason1}/></div>
                <div className="reason-text">
                    <h3>It’s weird. </h3>
                    <p>Everyone at tea time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here. </p>
                </div>
            </div>
            <div className="reason">
                <div className="reason-text">
                    <h3>We won't meet otherwise.</h3>
                    <p>In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity.</p>
                </div>
                <div className="reason-image"><img src={window.staticImages.reason2}/></div>
            </div>
            <div className="reason">
                <div className="reason-image"><img src={window.staticImages.reason3}/></div>
                <div className="reason-text">
                    <h3>Hands are meant to high five! </h3>
                    <p>And your eyes are made…for eye contact! Real humans are so much cooler than their tweets or Instagram pictures. Tea time has real humans! #nofilter!</p>
                </div>
            </div>
            {/* <p>So talk to people, face to face, in real life, in front of you.</p> */}
        </div>

        <div className="main-three">
            <div><img src={window.staticImages.appeal}/></div>
            <span>
                <blockquote>
                    "A leaf fluttered in through the window this morning, as if supported
                    by the rays of the sun, a bird settled on the fire escape, joy in the
                    task of coffee, joy accompanied me as I walked" <strong>~ Anais Nin</strong>
                </blockquote>
            </span>
        </div>

        <div className='main-four'>
            <img src={window.staticImages.appeal}/>
            <span>Coffee or Tea? </span>
            {/* <span>Coffee or Tea? </span> */}
        </div>

    </div>
);