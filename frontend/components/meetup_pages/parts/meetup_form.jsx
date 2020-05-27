import React from 'react';
import Calendar from 'react-calendar';
import * as convertFunctions from '../../../util/convertor_util';
// import Calendar from 'react-calendar/dist/entry.nostyle';
// import { Link } from 'react-router-dom';

class NewMeetup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: [181, 181, null, null, null, null, null, null], // [lat, lng, name of venue, address, city, state/province, zip, country]
      starttime: "yyyy-mm-dd hh:mm",
      // starttime: [null, null, null, null, null, null],     // [DOW, year, month, day, hour, minute]
      metro_area: this.props.host.home_city,
      topic: "",
      guests: [],
      capacity: 0,
      
    }
    this.handleSubmit = this.handleSubmit.bind(this);

    // Bind later when function actually gets called
    // this.handlePhoto = this.handlePhoto.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  updateLocation(index) {
    const currLocation = this.state.location;
    return e => {
      currLocation[index] = e.target.value;
      this.setState({ location: currLocation })
    }
  }

  // ERRORS
  renderErrors() {return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>{error}</li>
      ))}
    </ul>
  )}

  // INPUT/SUBMIT

  handleSubmit(e) {
    e.preventDefault();

    const meetup = Object.assign({}, this.state);
    meetup.starttime = new Date(this.state.starttime).valueOf()/1000;
    
    this.props.processForm(meetup)
    .then( 
      () => this.props.history.push(`/profile`)
    );
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // For time only handling
  onTimeChange() {
    let date = this.state.starttime.split(" ");
    return e => {
      const timestring = e.target.value.split(":");
      const time = `${timestring[0]}:${timestring[1]}`

      this.setState({ starttime: [date[0], time].join(" ") })
    }
  }
  
  // For date to string
  onDateChange() {
    const time = this.state.starttime.split(" ");
    return e => {
      let timestring = e.toDateString().split(" ");
      const date = `${timestring[3]}-${convertFunctions.convertMonthtoInt(timestring[1])}-${timestring[2]}`
      this.setState({ starttime: [date, time[1]].join(" ") })
    }
  }

  handlePhoto(e) {
    const file = e.currentTarget.files[0];
    console.log(e.currentTarget.files);
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // In handleSubmit
  // if (this.state.photoFile) {
  //   formData.append('bench[photo]', this.state.photoFile);
  // }

  // RENDER

  render() {
    const preview = this.state.photoUrl ? <img height="200px" width="200px" src={this.state.photoUrl} /> : null
    // console.log(this.props);
    return (
      <div className="new-meetup">
        <h3>New Meetup!</h3>
        <form onSubmit={this.handleSubmit} className="new-meetup-details">
          {this.renderErrors()}
          <div className="new-meetup-left">
            <div className="where">
              <label>
                <p className="signinup-title">Name of Venue:*</p>
                <input type="text"
                  value={this.state.location[2]}
                  onChange={this.updateLocation(2)}
                  className="signinup-input"
                />
              </label>
              <label>
                <p className="signinup-title">Metropolitan Area <br/> (Not the exact city/suburb where the venue is, <br/> but the name of the greater area):*<br/> Example: Pasadena vs Los Angeles</p>
                <input type="text"
                  value={this.state.metro_area}
                  onChange={this.update("metro_area")}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">Address:*</p>
                <input type="text"
                  value={this.state.location[3]}
                  onChange={this.updateLocation(3)}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">City:*</p>
                <input type="text"
                  value={this.state.location[4]}
                  onChange={this.updateLocation(4)}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">Zip Code:*</p>
                <input type="text"
                  value={this.state.location[5]}
                  onChange={this.updateLocation(5)}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">State/Province:*</p>
                <input type="text"
                  value={this.state.location[6]}
                  onChange={this.updateLocation(6)}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">Country:*</p>
                <input type="text"
                  value={this.state.location[7]}
                  onChange={this.updateLocation(7)}
                  className="signinup-input"
                />
              </label>
            </div>
            <div className="when">
            {/* YEAR, MONTH, DAY, DOW, HOUR, MINUTE */}
              <p className="final-form-header">When should we meet?</p>
              <hr></hr>
              <Calendar onChange={this.onDateChange()} />

              <label>
                <input type="time" onChange={this.onTimeChange()} />
              </label>
            </div>
          </div>


          <div className="new-meetup-right">
            <div className="picture">

            {/* <div className="button-holder">
              <h3>Image preview </h3>
              {preview}
              <h3 className="button-holder">Add a Picture</h3>
              <input type="file" className="new-bench-button"
                onChange={this.handleFile.bind(this)}/>
            </div> */}

            {/* EDIT PROFILE PICTURE. NULL FALSE */}
              {/* <label className="fancy">
                Choose a file
                <input type="file" className="inputfile" onChange={handlePhoto} />
              </label>
              <h3>Image Preview</h3>
              <hr></hr>
              <div className="preview">{preview}</div> */}
            </div>
            <label>
              <p className="signinup-title">What topics do you want to talk about?</p>
              <textarea rows="4" cols="50" 
                value={this.state.topic}
                onChange={this.update('topic')}/>   
            </label>
            <br/>
            <label>
              <p className="signinup-title">Capacity:*</p>
              <input type="number"
                value={this.state.capacity}
                onChange={this.update('capacity')}
                className="signinup-input"
              />
            </label>

            {/* datetime-local is not widely used and isn't supported in Firefox */}
            {/* <input
              className="create-meetup-form-input-field"
              onChange={this.update('starttime')}
              type="datetime-local"
              value={this.state.starttime}
            /> */}

          </div>
          <input className="session-submit" type="submit" value="Create Meetup!" />
        </form>
      </div>
    )
  }
}

export default NewMeetup;