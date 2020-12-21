import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { clearMessage } from "../../actions/message_actions";


const Message = (props) => {
    useEffect(() => {
        return () => {
            clearMessage()
        }
    }, [])
    // let state = Object.entries(props.state);
    const message = props.user ? props.user.message : null;

    const displayMessage = () => (
        <div className="message-bar">
            <p>{message}</p>
            {/* <p>Your account has been successfully created!</p> */}
        </div>
    );
    // MESSAGE WON'T GO THROUGH BACKEND, BUT WILL BE UPDATED IN STORE USING REDUCERS CALLED VIA ACTIONS
    return message ? displayMessage() : "";
    // return displayMessage();
};

export default Message;