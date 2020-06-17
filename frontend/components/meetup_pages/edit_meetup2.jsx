import React from 'react';
import Calendar from 'react-calendar';
import * as convertFunctions from '../../util/convertor_util';
// import Calendar from 'react-calendar/dist/entry.nostyle';
// import { Link } from 'react-router-dom';

class EditMeetup extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
    // if(this.props.meetup){
    //   console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
    //   this.state = {
    //     location: this.props.meetup.location, // [lat, lng, name of venue, address, city, state/province, zip, country]
    //     starttime: this.props.meetup.starttime,
    //     metro_area: this.props.meetup.metro_area,
    //     topic: this.props.meetup.topic,
    //     guests: this.props.meetup.guests,
    //     capacity: this.props.meetup.capacity,
    //   }
    // } else{
      this.state = {
        location: "", // [lat, lng, name of venue, address, city, state/province, zip, country]
        starttime: "",
        metro_area: "",
        topic: "",
        guests: "",
        capacity: "",
      }
    // }
    this.handleSubmit = this.handleSubmit.bind(this);

    // Bind later when function actually gets called
    // this.handlePhoto = this.handlePhoto.bind(this);
  }
  // componentDidMount() {
  //   this.props.fetchMeetup(this.props.meetupId)
  //   .then(meetup => {this.props.fetchHost(this.props.meetup.host_id)})
  // }

  componentDidMount() {
    this.props.clearErrors()
    this.props.fetchMeetup(this.props.meetupId)

    // this.props.clearErrors()
      // .then(() => {this.props.fetchMeetup(this.props.meetupId)})
  }

  componentDidUpdate(prevProps){
    if(this.props.meetup && this.props.meetup != prevProps.meetup){
      this.setState({
        location: this.props.meetup.location, // [lat, lng, name of venue, address, city, state/province, zip, country]
        starttime: this.changeTimetoString(this.props.meetup.starttime),
        metro_area: this.props.meetup.metro_area,
        topic: this.props.meetup.topic,
        guests: this.props.meetup.guests,
        capacity: this.props.meetup.capacity,
      })
    }
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
    meetup.id = this.props.meetup.id;
    
    this.props.processForm(meetup)
    .then(() => this.props.history.push(`/meetups/${meetup.id}`));
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
    // if(this.props.meetup){
      console.log(this.state.starttime);
      const time = this.state.starttime.split(" ");
      return e => {
        let timestring = e.toDateString().split(" ");
        const date = `${timestring[3]}-${convertFunctions.convertMonthtoInt(timestring[1])}-${timestring[2]}`
        this.setState({ starttime: [date, time[1]].join(" ") })
      }
    // }
  }

  changeTimetoString(datetime){
    // 2020-5-07 01:09
    // if(typeof datetime === "number"){
      datetime = new Date(datetime * 1000);
      return`${datetime.getFullYear()}-${datetime.getMonth()}-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}`
    // } else {
    //   return datetime;
    // }
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
    if(this.props.meetup && this.props.meetup.host_id === this.props.session.id){ // Allows only the actual host to edit meetup, not any hosts
      const preview = this.state.photoUrl ? <img height="200px" width="200px" src={this.state.photoUrl} /> : null
      console.log(this.props);
      return (
        <div className="new-meetup">
          <h3>Edit Meetup!</h3>
          <form onSubmit={this.handleSubmit} className="new-meetup-details">
            {this.renderErrors()}
            <div className="new-meetup-left">
              <div className="where">
                <label className="data-entry">
                  <p className="signinup-title">Name of Venue:*</p>
                  <input type="text"
                    value={this.state.location[2]}
                    onChange={this.updateLocation(2)}
                    className="signinup-input"
                  />
                </label>
                <label className="data-entry">
                  <p className="signinup-title">Metropolitan Area <br/> (Not the exact city/suburb where the venue is, <br/> but the name of the greater area):*<br/> Example: Pasadena vs Los Angeles</p>
                  <input type="text"
                    value={this.state.metro_area}
                    onChange={this.update("metro_area")}
                    className="signinup-input"
                  />
                </label>
  
                <br/>
                <label className="data-entry">
                  <p className="signinup-title">Address:*</p>
                  <input type="text"
                    value={this.state.location[3]}
                    onChange={this.updateLocation(3)}
                    className="signinup-input"
                  />
                </label>
  
                <br/>
                <label className="data-entry">
                  <p className="signinup-title">City:*</p>
                  <input type="text"
                    value={this.state.location[4]}
                    onChange={this.updateLocation(4)}
                    className="signinup-input"
                  />
                </label>
  
                <br/>
                <label className="data-entry">
                  <p className="signinup-title">Zip Code:*</p>
                  <input type="text"
                    value={this.state.location[5]}
                    onChange={this.updateLocation(5)}
                    className="signinup-input"
                  />
                </label>
  
                <br/>
                <label className="data-entry">
                  <p className="signinup-title">State/Province:*</p>
                  <input type="text"
                    value={this.state.location[6]}
                    onChange={this.updateLocation(6)}
                    className="signinup-input"
                  />
                </label>
  
                <br/>
                <label className="data-entry">
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
  
                <label className="data-entry">
                  <input type="time" onChange={this.onTimeChange()} />
                </label>
                <p>Meetup is currently set for {this.state.starttime}</p>
              </div>
            </div>
  
  
            <div className="new-meetup-right">
              <div className="host-pic-full">
  
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
              <label className="data-entry">
                <p className="signinup-title">What topics do you want to talk about?</p>
                <textarea rows="4" cols="50" 
                  value={this.state.topic}
                  onChange={this.update('topic')}/>   
              </label>
              <br/>
              <label className="data-entry">
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
            <input className="session-submit" type="submit" value="Edit Meetup!" />
          </form>
        </div>
      )
    }
    else if(this.props.meetup && this.props.meetup.host_id != this.props.session.id){
      return(
        <div className="new-meetup">
          <h3>Sorry, buddy, you can't edit a meetup that you aren't hosting</h3>
          <a href="#/profile">Back to Profile</a>
        </div>
      )
    }
    else{
      return(
        <div className="new-meetup">
          <h3>Uh oh, the meetup you are looking for doesn't exist!</h3>
          <a href="#/meetups">Back to Meetups</a>
        </div>
      )
    }

    // return (
    //   <div className="new-meetup">
    //     <h3>New Meetup!</h3>
    //     <form onSubmit={this.handleSubmit} className="new-meetup-details">
    //       {this.renderErrors()}
    //       <div className="new-meetup-left">
    //         <div className="where">
    //           <label className="data-entry">
    //             <p className="signinup-title">Name of Venue:*</p>
    //             <input type="text"
    //               value={this.state.location[2]}
    //               onChange={this.updateLocation(2)}
    //               className="signinup-input"
    //             />
    //           </label>
    //           <label className="data-entry">
    //             <p className="signinup-title">Metropolitan Area <br/> (Not the exact city/suburb where the venue is, <br/> but the name of the greater area):*<br/> Example: Pasadena vs Los Angeles</p>
    //             <input type="text"
    //               value={this.state.metro_area}
    //               onChange={this.update("metro_area")}
    //               className="signinup-input"
    //             />
    //           </label>

    //           <br/>
    //           <label className="data-entry">
    //             <p className="signinup-title">Address:*</p>
    //             <input type="text"
    //               value={this.state.location[3]}
    //               onChange={this.updateLocation(3)}
    //               className="signinup-input"
    //             />
    //           </label>

    //           <br/>
    //           <label className="data-entry">
    //             <p className="signinup-title">City:*</p>
    //             <input type="text"
    //               value={this.state.location[4]}
    //               onChange={this.updateLocation(4)}
    //               className="signinup-input"
    //             />
    //           </label>

    //           <br/>
    //           <label className="data-entry">
    //             <p className="signinup-title">Zip Code:*</p>
    //             <input type="text"
    //               value={this.state.location[5]}
    //               onChange={this.updateLocation(5)}
    //               className="signinup-input"
    //             />
    //           </label>

    //           <br/>
    //           <label className="data-entry">
    //             <p className="signinup-title">State/Province:*</p>
    //             <input type="text"
    //               value={this.state.location[6]}
    //               onChange={this.updateLocation(6)}
    //               className="signinup-input"
    //             />
    //           </label>

    //           <br/>
    //           <label className="data-entry">
    //             <p className="signinup-title">Country:*</p>
    //             <input type="text"
    //               value={this.state.location[7]}
    //               onChange={this.updateLocation(7)}
    //               className="signinup-input"
    //             />
    //           </label>
    //         </div>
    //         <div className="when">
    //         {/* YEAR, MONTH, DAY, DOW, HOUR, MINUTE */}
    //           <p className="final-form-header">When should we meet?</p>
    //           <hr></hr>
    //           <Calendar onChange={this.onDateChange()} />

    //           <label className="data-entry">
    //             <input type="time" onChange={this.onTimeChange()} />
    //           </label>
    //         </div>
    //       </div>


    //       <div className="new-meetup-right">
    //         <div className="host-pic-full">

    //         {/* <div className="button-holder">
    //           <h3>Image preview </h3>
    //           {preview}
    //           <h3 className="button-holder">Add a Picture</h3>
    //           <input type="file" className="new-bench-button"
    //             onChange={this.handleFile.bind(this)}/>
    //         </div> */}

    //         {/* EDIT PROFILE PICTURE. NULL FALSE */}
    //           {/* <label className="fancy">
    //             Choose a file
    //             <input type="file" className="inputfile" onChange={handlePhoto} />
    //           </label>
    //           <h3>Image Preview</h3>
    //           <hr></hr>
    //           <div className="preview">{preview}</div> */}
    //         </div>
    //         <label className="data-entry">
    //           <p className="signinup-title">What topics do you want to talk about?</p>
    //           <textarea rows="4" cols="50" 
    //             value={this.state.topic}
    //             onChange={this.update('topic')}/>   
    //         </label>
    //         <br/>
    //         <label className="data-entry">
    //           <p className="signinup-title">Capacity:*</p>
    //           <input type="number"
    //             value={this.state.capacity}
    //             onChange={this.update('capacity')}
    //             className="signinup-input"
    //           />
    //         </label>

    //         {/* datetime-local is not widely used and isn't supported in Firefox */}
    //         {/* <input
    //           className="create-meetup-form-input-field"
    //           onChange={this.update('starttime')}
    //           type="datetime-local"
    //           value={this.state.starttime}
    //         /> */}

    //       </div>
    //       <input className="session-submit" type="submit" value="Create Meetup!" />
    //     </form>
    //   </div>
    // )
  }
}

export default EditMeetup;