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

    const displayMessage = () => (
        <div className="message-bar">
            <p>{props.message}</p>
            {/* <p>Your account has been successfully created!</p> */}
        </div>
    );
    // MESSAGE WON'T GO THROUGH BACKEND, BUT WILL BE UPDATED IN STORE USING REDUCERS CALLED VIA ACTIONS
    return props.message ? displayMessage() : "";
    // return displayMessage();
};

export default Message;

// import React, { useEffect } from 'react';
// import { clearMessage } from "./message_actions"
// const ComponentExample => () => {
//     useEffect(() => {
//         return () => {
//             dispatch(clearMessage())
//         }
//     }, [])
// }

// dispatch => ({
//     clearErrors: () => dispatch(clearMessage())
// })