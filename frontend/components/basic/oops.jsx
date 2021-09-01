import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { clearMessage } from "../../actions/message_actions";
// /terms
// Plain Text terms of service
const BadPage = ({clearMessage}) => {
    useEffect(() => {
        return () => {
            clearMessage()
        }
    }, [])
    return(
        <div className="about" id="badPage">
            <h1 className="padding-30">Oh boy.....</h1>
            <p>This doesn't look good. Looks like you found a bug on my website...
                <br/>Tell me, how did you get here?
                <br/>
                <a>You can do so here when my email is set up</a>
                <br/>
                <br/>
                <a href="/">Let's take you back home</a>
            </p>
        </div>
    );
}

const mapDTP = dispatch => ({
    clearMessage: () => dispatch(clearMessage())
});

export default connect(null,mapDTP)(BadPage);