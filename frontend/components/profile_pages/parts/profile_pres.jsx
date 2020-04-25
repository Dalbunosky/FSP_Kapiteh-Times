import React from 'react';

const ProfileBar = props =>{
    // console.log(props)
    let currentUserStat = Object.values(props)[0]
    // console.log(currentUserStat.host_status)

    const yepNope = bool => {
        return ( bool ? "Yep!" : "Nope!")
    }

    const contractStory = story => {

        if((story === null) || (story.length === 0)){return "Yeah, what is it?"}
        else if (story.length > 18){return`${story.slice(0,15)}...`}
        else {return story}
    }
    
    return(
        <div className="profile-sidebar">
            {/* Convert to Aside later? */}
            <h1>Hey, {currentUserStat.name}!!!!</h1>
            {/* PROFILE PICTURE HERE IF PRESENT */}
            <p className="title">Name</p>
            <p className="detail">{currentUserStat.name}</p>
            <p className="title">Email</p>
            <p className="detail">{currentUserStat.email}</p>
            <p className="title">Phone</p>
            <p className="detail">{currentUserStat.phone}</p>
            <p className="title">Current Metro Area</p>
            <p className="detail">{currentUserStat.home_city}</p>
            <p className="title">My story</p>
            <p className="detail">{contractStory(currentUserStat.story)}</p>
            <p className="title">Am I a host?</p>
            <p className="detail">{yepNope(currentUserStat.host_status)}</p>
            <p className="title">Email Subscription On?</p>
            <p className="detail">{yepNope(currentUserStat.email_subscription)}</p>
        </div>
    );
};

export default ProfileBar;