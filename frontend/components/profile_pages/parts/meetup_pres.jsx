export const JoinedMeetups = props =>(
    <div className="my-meetup">
        <p className="meetup-spec">Location:</p>
        <p className="meetup-detail">{this.props.meetup.location}</p>
        <p className="meetup-spec">Date:</p>
        <p className="meetup-detail">{this.props.meetup.date}</p>
        <p className="meetup-spec">Time:</p>
        <p className="meetup-detail">{this.props.meetup.time}</p>
        <p className="meetup-spec">Host:</p>
        {/* <p className="meetup-detail">{meetup.location}</p> */}
        {/* Host name, photo, button to host */}
        <p className="meetup-detail">Host details</p>
        {/* <button></button> Button to cancel meetup */}
        {/* If in the future, cancel button */}
    </div>
)

export const HostedMeetups = props =>(
    <div className="my-meetup">
        <p className="meetup-spec">Location:</p>
        <p className="meetup-detail">{this.props.meetup.location}</p>
        <p className="meetup-spec">Date:</p>
        <p className="meetup-detail">{this.props.meetup.date}</p>
        <p className="meetup-spec">Time:</p>
        <p className="meetup-detail">{this.props.meetup.time}</p>
        <p className="meetup-spec">Guests:</p>
        <p className="meetup-detail">{meetup.location}</p>
        {/* Guest names */}
        {/* Guest contacts */}
        {/* If in the future, cancel button */}
    </div>
)