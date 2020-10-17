import React from 'react';


const Messages = (props) => {
    // let state = Object.entries(props.state);
    console.log(props.state);
    // console.log(state);

    // MESSAGE WON'T GO THROUGH BACKEND, BUT WILL BE UPDATED IN STORE USING REDUCERS CALLED VIA ACTIONS
    return(
        <div className="message-bar">
            {/* {this.props.messages.map(message => <p>{message}</p>)} */}
            {/* Messages like welcome back, you've been logged out, they would be here. */}
        </div>
    )
  
};

export default Messages