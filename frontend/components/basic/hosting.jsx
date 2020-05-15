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
        const user = Object.assign({}, this.props.currentUser);
        user.host_status = true;
        this.props.processForm(user);
    };

    renderErrors() {return(
        <ul>
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>{error}</li>
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
                        <p><a onClick={this.becomeHost}>Make Me A Host!</a></p>
                    )
                }
            }
        }
        return(
            <div className="about">
                <h1>Hosting</h1>
                <h3>Why host?</h3>
                <p>tredfbnbjhytrefdbvnytrdfvbnytrfvnrfvbnyt654erfdh654rfdghg</p>

                <h3>Apply to host!</h3>
                <p>tredfbnbjhytrefdbvnytrdfvbnytrfvnrfvbnyt654erfdh654rfdghg</p>

                <h3>The Application Process</h3>
                <p>tredfbnbjhytrefdbvnytrdfvbnytrfvnrfvbnyt654erfdh654rfdghg</p>

                <h3>The Responsibilities</h3>
                <p>tredfbnbjhytrefdbvnytrdfvbnytrfvnrfvbnyt654erfdh654rfdghg</p>

                <h3>Start Here</h3>
                <p>Look up hosting button process</p>

                <h3>So, you still want to host?</h3>
                <p>Yes? Well, then, {applyOrSignUp(this.props.session)}</p>
                {this.renderErrors()}

            </div>
        )
    }
// );
}

export default Hosting;