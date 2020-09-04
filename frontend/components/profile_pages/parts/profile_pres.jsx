import React from 'react';

const ProfileBar = props =>{
    let currentUserStat = Object.values(props)[0]

    const yepNope = bool => {
        return ( bool ? "Yep!" : "Nope!")
    }

    const contractStory = story => {
        if((story === null) || (story.length === 0)){return <i>Yeah, what is it?</i>}
        else if (story.length > 18){return`${story.slice(0,15)}...`}
        else {return story}
    }
    const editLink = type => {
        return((type === "edit") ? "" : <a className="blue bold editLink" href="#/profile/edit">Edit Profile</a>)
    }
    console.log("props", currentUserStat)
    console.log(currentUserStat.image_url)
    const selfPic = (currentUserStat.image_url && currentUserStat.image_url != "" ?  currentUserStat.image_url : window.staticImages.defaultPic)
    
    return(
        <div className="sidebar">
            <h3>Hey,<br/>{currentUserStat.name}!</h3>
            {/* PROFILE PICTURE HERE IF PRESENT */}
            <div className="profile-pic"><img src={selfPic} alt="Profile Picture"/></div>
            <div>
                <p className="title bold">Name</p>
                <p className="detail">{contractStory(currentUserStat.name)}</p>
                <br/>
                <p className="title bold">Email</p>
                <p className="detail">{contractStory(currentUserStat.email)}</p>
                <br/>
                <p className="title bold">Phone</p>
                <p className="detail">{currentUserStat.phone}</p>
                <br/>
                <p className="title bold">Current Metro Area</p>
                <p className="detail">{currentUserStat.home_city}</p>
                <br/>
                <p className="title bold">My story</p>
                <p className="detail">{contractStory(currentUserStat.story)}</p>
                <br/>
                <p className="title bold">Am I a host?</p>
                <p className="detail">{yepNope(currentUserStat.host_status)}</p>
                <br/>
                <p className="title bold">Email Subscription On?</p>
                <p className="detail">{yepNope(currentUserStat.email_subscription)}</p>
            </div>
            {editLink(props.type)}
        </div>
    );
};

export default ProfileBar;