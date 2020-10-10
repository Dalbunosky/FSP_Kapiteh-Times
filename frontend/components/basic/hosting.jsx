import React from 'react';

// /hosting
// Hosting
// Explain the redirect in main
// What process you would do
// Button: Email
class Hosting extends React.Component {
    constructor(props) {
      super(props);

      this.becomeHost = this.becomeHost.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }
    
    componentWillUnmount() {
        this.props.clearErrors();
    }

    becomeHost(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.props.currentUser);
        // user.host_status = true;
        let user = new FormData();
        user.append('user[id]', this.props.currentUser.id);
        user.append('user[host_status]', true);

        this.props.processForm(user);
    };

    renderErrors() {return(
        <ul className="red">
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}><strong>{error}!</strong></li>
            ))}
        </ul>
    )}

// const Hosting = props => (
    render(){
        const applyOrSignUp = (id) =>{
            if(id === null){
                return(
                    <p><a href="#/signin">Sign In</a> or <a href="#/signup">Sign Up</a>, then come back here.</p>
                )
            }
            else{ // logged in, but may or may not be a host already
                if(this.props.currentUser.host_status){
                    return( <p><a href="#/meetups/new">Go host a meetup! You're a host already!</a></p>)
                }
                else{
                    return(
                        <p><a className="button" onClick={this.becomeHost}>Make Me A Host!</a></p>
                    )
                }
            }
        }
        return(
            <div className="basic-page">
                <div className="welcome">
                    <img src={window.staticImages.groupChat}/>
                    <span>Become a Host!</span>
                </div>
                {/* <h1 className="padding-30">Hosting</h1> */}
                <div className="about">
                    <h3 className="padding-30">Why host?</h3>
                    <p>Well, why not? Being a host lets you plan meetups at your convinience, 
                        and you get to meet as few or many people as you like. The meetup is 
                        yours.
                    </p>
                    <p>Perhaps you are a social person, but yet not where you want to be. 
                        Maybe you want to be more daring, charismatic, a better talker, organizer.
                        This is a good opportunity
                    </p>

                    <h3 className="padding-30">The Responsibilities</h3>
                    <ul>
                        <li>You will have to arrive at your meetup ahead of time.</li>
                        <li>You will need to lead the conversation whenever needed.</li>
                    </ul>

                    <h3 className="padding-30">The Requirements</h3>
                    <ul>
                        <li>You need to have a profile picture. That way, guests will 
                            know who the host is.</li>
                        <li>You will need to have contact info on file, in case guests 
                            have an issue looking for the meetup.</li>
                        <li>You will need to have a story explaining your life, hobbies, 
                            etc for a humanizing effect, so that guests will feel more 
                            comfortable. 
                        </li>
                    </ul>

                    <h3 className="padding-30">Apply to host!</h3>
                    <p>Normally, the admin for the site would approve hosts manually, 
                        but given that this is just a project and the site runs unmanned, 
                        you can become a host, albeit, a non-functioning one, when you 
                        fulfill the requirements and click below.
                    </p>

                    <h3 className="padding-30">Start Here</h3>
                    <p>Look up hosting button process</p>

                    <h3 className="padding-30">So, you still want to host?</h3>
                    <p>Yes? Well, then, {applyOrSignUp(this.props.session)}</p>
                    {this.renderErrors()}
                </div>
            </div>
        )
    }
// );
}

export default Hosting;