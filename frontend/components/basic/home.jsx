import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { clearMessage } from "../../actions/message_actions";

// export default () => (
const Home = ({clearMessage}) => {
    useEffect(() => {
        return () => {
            clearMessage()
        }
    }, [])
    return(
        <div className="basic-page">
            <div className="welcome">
                <img src={window.staticImages.groupChat}/>
                <span><p className="large">Everyone has an interesting story</p><br/><p className="small">Come find out over a drink and a conversation.</p></span>
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
                <h4>So why are people doing it?</h4>
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

            <div className='main-three'>
                <h4>There's no such thing as a stranger.</h4>
                <img src={window.staticImages.appeal}/>
                <div className="proclaim">
                    <p>You'd never think of yourself as a stranger. But everyone else does. You know your story. Your embarrassments. Your joy. Your idiocyncrasies — the thing that make you, you. But they don't.</p>
                    <p>And everyone has these — whether or not we know what they are. Everyone around you is a person, loaded with stories that you can't even begin to fathom. They're different from yours, but the fact that we all have them is what brings us together.</p>
                    <p>In a stranger's story, we might discover parts of our own. And in seeing where a stranger is coming from, we might realize they're actually not so strange. But we don't discover much just by thinking about it. So let's find out.</p>
                    <p>Yes, I copied this from the TWS website. This is a mock website w/ no revenue. I have other priorities and will get back to this later.</p>
                </div>
            </div>

            <div className='main-four'>
                {/* <img src={window.staticImages.appeal}/> */}
                <p>So, are you up for a</p>

                <a className="button" href="#/meetups">Coffee or Tea?</a>
                {/* <button>Coffee or Tea?</button> */}
            </div>

            <div className="main-five">
                    <div className="review">
                        "This website impressed me with its functions and abilities. I enjoyed
                        scheduling mock meetings with my friends for an upcoming dinner. It's 
                        hard to imagine this having been built by a single person." <strong>~ Jane Doe</strong>
                    </div>
                    <div className="review">
                        "I didn't realize this was a mock website, but having played with all
                        functions I can find, I couldn't think of another feature I wouldn't
                        have added myself... yet." <strong>~ John Snow</strong>
                    </div>
            </div>

        </div>
    )
}
const mapDTP = dispatch => ({
    clearMessage: () => dispatch(clearMessage())
});

export default connect(null,mapDTP)(Home);