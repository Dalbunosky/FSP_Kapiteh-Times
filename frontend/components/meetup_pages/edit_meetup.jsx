import React from 'react';
import Calendar from 'react-calendar';
// import Calendar from 'react-calendar/dist/entry.nostyle';
// import { Link } from 'react-router-dom';

class EditMeetup extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      location: this.props.location, // [lat, lng, name of venue, address, city, state/province, zip, country]
      starttime: this.props.starttime,
      metro_area: this.props.metro_area,
      topic: this.props.topic,
      guests: this.props.guests,
      capacity: this.props.capacity,
      
      // host: props.host.id,     // currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);

    // Bind later when function actually gets called
    // this.handlePhoto = this.handlePhoto.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    // this.autocomplete();
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
    console.log(this.state);
    console.log(meetup);
    
    this.props.processForm(meetup)
    .then(
    //   // event => this.props.history.push(`/fraptimes/${meetup.meetup.id}`), 
      () => this.props.history.push(`/profile`), 
    //   event => this.props.history.push(`/profile`)).catch() 
      // errors => this.renderErrors()
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
    let date = this.state.starttime;
    return e => {
      let timestring = e.target.value.split(":");
      let DOW = date[0];
      let year = date[1];
      let month = date[2];
      let day = date[3];
      let hour = timestring[0];
      let minute = timestring[1];
      this.setState({ starttime: [DOW, year, month, day, hour, minute] })
      console.log(this.state.starttime)
      // For meridian (AM/PM) processing, go check FWF
    }
  }
  
  // For date to string
  onDateChange() {
    let timern = this.state.starttime;
    return e => {
      let date = e.toDateString().split(" ");
      let DOW = this.convertDOWtoInt(date[0]);
      let month = this.convertMonthtoInt(date[1]);
      let day = date[2];
      let year = date[3];
      let hour = timern[4];
      let minute = timern[5];
      this.setState({ starttime: [DOW, year, month, day, hour, minute] });
    }
  }

  convertDOWtoInt(dow){
    switch(dow){
      case "Sun":
        return 0;
      case "Mon":
        return 1;
      case "Tue":
        return 2;
      case "Wed":
        return 3;
      case "Thu":
        return 4;
      case "Fri":
        return 5;
      default:
        return 6;
    }
  }

  convertMonthtoInt(dow){
    switch(dow){
      case "Jan":
        return 1;
      case "Feb":
        return 2;
      case "Mar":
        return 3;
      case "Apr":
        return 4;
      case "May":
        return 5;
      case "Jun":
        return 6;
      case "Jul":
        return 7;
      case "Aug":
        return 8;
      case "Sep":
        return 9;
      case "Oct":
        return 10;
      case "Nov":
        return 11;
      case "Dec":
        return 12;
      default:
        return 0;
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
    console.log(this.props);
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

export default EditMeetup;