import React from 'react';
import Calendar from 'react-calendar';
// import Calendar from 'react-calendar/dist/entry.nostyle';
// import { Link } from 'react-router-dom';

// test_meetup = Meetup.new(location: [null, null, 'langers', '123 chi st', 'San Francisco', 'California', '94108', 'USA'], host: "DemoHost", capacity: 10, topic: "Whatever you want", starttime: ["Sun", 4,12, 2020, 19, 0] )
class NewMeetup extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      location: [181, 181, null, null, null, null, null, null], // [lat, lng, name of venue, address, city, state/province, zip, country]
      starttime: [null, null, null, null, null, null],     // [DOW, month, day,  year, hour, minute]
      topic: "",
      guests: [],
      capacity: 0,
      
      host: props.host.name,     // currentUser.name
      hostId: props.host.id
      // photoFile: null,
      // photoUrl: null,
    }
    console.log(this.state.host); //Need to do object.values
    console.log(this.state.hostId);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Bind later when function actually gets called
    // this.handlePhoto = this.handlePhoto.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    // this.autocomplete();
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (prevState.center.lat !== this.state.center.lat || prevState.center.lng !== this.state.center.lng ) {
  //   // this.autocomplete();
  //   }
  // }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  // changeLocation(val) {
  //   if (val === "New York") {
  //     this.setState({ center: { lat: 40.757900, lng: -73.873005 }, zoom: 12 });
  //     this.setState({ city: "New York" });
  //   } else if (val === "Boston") {
  //     this.setState({ center: { lat: 42.377008, lng: -71.117030 }, zoom: 12 });
  //     this.setState({ city: "Boston" });
  //   } else if (val === "San Francisco") {
  //     this.setState({ center: { lat: 37.731901, lng: -122.443611 }, zoom: 12 });
  //     this.setState({ city: "San Francisco" });
  //   } else if (val === "Dallas") {
  //     this.setState({ center: { lat: 32.790808, lng: -96.797194 }, zoom: 12 });
  //     this.setState({ city: "Dallas" });
  //   }
  // }

    // ERRORS

  renderErrors() {return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>{error}</li>
      ))}
    </ul>
  )}

  // For adjusting map when selecting cities on map
  // autocomplete() {
  //   //setting the bounds, have strictBounds to true, TODO: set bounds based on city
  //   let center;
  //   let mapOptions;
  //   let map;
  //   let defaultBounds;
  //   let city;
  //   let swBound1;
  //   let swBound2;
  //   let neBound1;
  //   let neBound2;

  //   center = this.state.center;
  //   city = this.state.city
  //   if (city === "New York") {
  //     swBound1 = 40.658480;
  //     swBound2 = 40.827725;
  //     neBound1 = -74.032591;
  //     neBound2 = -73.715510;
  //   } else if (city === "Boston") {
  //     swBound1 = 42.227997;
  //     swBound2 = 42.386856;
  //     neBound1 = -71.221087;
  //     neBound2 = -71.022309;
  //   } else if (city === "San Francisco") {
  //     swBound1 = 37.693417;
  //     swBound2 = 37.809615;
  //     neBound1 = -122.497790;
  //     neBound2 = -122.400885;
  //   } else if (city === "Dallas") {
  //     swBound1 = 32.650318;
  //     swBound2 = 32.926633;
  //     neBound1 = -96.946336;
  //     neBound2 = -96.681859;
  //   }
  //   mapOptions = { center, zoom: 12 }
  //   map = new google.maps.Map(this.mapNode, mapOptions);
  //   defaultBounds = new google.maps.LatLngBounds(
  //     new google.maps.LatLng(swBound1, neBound1),
  //     new google.maps.LatLng(swBound2, neBound2),
  //   )

  //   let input = document.getElementById('searchTextField');
  //   // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  //   let options = {
  //     bounds: defaultBounds,
  //     types: ['establishment'],
  //     strictBounds: true
  //   }

  //   let searchBox = new google.maps.places.SearchBox(input, options);
    
  //   const that = this;
  //   searchBox.addListener('places_changed', function () {
  //     var places = searchBox.getPlaces();
  //     // let markers = [];

  //     if (places.length == 0) {
  //       return;
  //     }

  //     var bounds = new google.maps.LatLngBounds();
  //     places.forEach(function (place) {
  //       if (!place.geometry) {
  //         console.log("Returned place contains no geometry");
  //         return;
  //       }

  //       var icon = {
  //         url: place.icon,
  //         size: new google.maps.Size(71, 71),
  //         origin: new google.maps.Point(0, 0),
  //         anchor: new google.maps.Point(17, 34),
  //         scaledSize: new google.maps.Size(25, 25)
  //       };

  //       // Create a marker for each place.
  //     let marker = new google.maps.Marker({
  //         map: map,
  //         icon: icon,
  //         title: place.name,
  //         position: place.geometry.location
  //       });

  //       let infoWindow = new google.maps.InfoWindow({
  //         content: '<p class="selecto">Selected!</p>'
  //       })
        
  //       marker.addListener('click', toggleBounce);
  //       marker.addListener('click', function (e) {
  //         let lat = e.latLng.lat();
  //         let lng = e.latLng.lng();
  //         that.setState({ lat, lng });
  //         infoWindow.open(map, marker)
  //       })
  //       marker.setMap(map)

  //       function toggleBounce() {
  //         if (marker.getAnimation() !== null) {
  //           marker.setAnimation(null);
  //         } else {
  //           marker.setAnimation(google.maps.Animation.BOUNCE);
  //         }
  //       }
      
  //       if (place.geometry.viewport) {
  //         bounds.union(place.geometry.viewport);
  //       } else {
  //         bounds.extend(place.geometry.location);
  //       }
  //     });
  //     map.fitBounds(bounds);
  //   });

  //   return searchBox;
  // }



  // INPUT/SUBMIT

  handleSubmit(e) {
    e.preventDefault();
    const meetup = Object.assign({}, this.state);
    // this.props.processForm(meetup);
    // If(this.props.errors.length === 0)(<Redirect to="/profile" />)
    // redirect to profile for now, redirect to meetup in future
    this.props.processForm(meetup).then(
    //   // event => this.props.history.push(`/fraptimes/${meetup.meetup.id}`), 
      meetup => this.props.history.push(`/profile`), 
    //   event => this.props.history.push(`/profile`)).catch() 
      () => {}
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
  
  // For date to string

  onDateChange(field) {
    let timern = this.state.starttime;
    return e => {
      let date = e.toDateString().split(" ");
      let DOW = convertDOWtoInt(date[0]);
      let month = date[1];
      let day = date[2];
      let year = date[3];
      let hour = timern[0];
      let minute = timern[1];
      this.setState({ starttime: [DOW, month, day, year, hour, minute] })
      console.log([DOW, month, day, year, hour, minute])
      // this.setState({ starttime: e.toDateString() })
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

  // For time only handling
  onTimeChange(field) {
    let date = this.state.time;
    return e => {
      let timestring = e.target.value.split(":");
      let DOW = date[0];
      let month = date[1];
      let day = date[2];
      let year = date[3];
      let hour = timestring[0];
      let minute = timestring[1];
      this.setState({ time: [DOW, month, day, year, hour, minute] })
      console.log([DOW, month, day, year, hour, minute])
      // For meridian (AM/PM) processing, go check FWF
    }
  }


  // AWS
  // handleAWSSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   if (this.state.photoFile) {
  //     formData.append('meetup[photo]', this.state.photoFile);
  //   }
  //   formData.append('meetup[openings]', this.state.openings);
  //   formData.append('meetup[name]', this.state.name);
  //   formData.append('meetup[date]', this.state.date);
  //   formData.append('meetup[starttime]', this.state.starttime);
  //   formData.append('meetup[summary]', this.state.summary);
  //   formData.append('meetup[story]', this.state.story);
  //   formData.append('meetup[discussion]', this.state.discussion);
  //   formData.append('meetup[quote]', this.state.quote);
  //   formData.append('meetup[lat]', this.state.lat);
  //   formData.append('meetup[lng]', this.state.lng);
  //   this.props.createMeetup(formData).then(meetup => this.props.history.push(`/fraptimes/${meetup.meetup.id}`), () => {
  //   });
  // }

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
                  onChange={this.update('location[2]')}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">Address:*</p>
                <input type="text"
                  value={this.state.location[3]}
                  onChange={this.update('location[3]')}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">City:*</p>
                <input type="text"
                  value={this.state.location[3]}
                  onChange={this.update('location[3]')}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">State/Province:*</p>
                <input type="text"
                  value={this.state.location[4]}
                  onChange={this.update('location[4]')}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">Zip:*</p>
                <input type="text"
                  value={this.state.location[5]}
                  onChange={this.update('location[5]')}
                  className="signinup-input"
                />
              </label>

              <br/>
              <label>
                <p className="signinup-title">Country:*</p>
                <input type="text"
                  value={this.state.location[6]}
                  onChange={this.update('location[6]')}
                  className="signinup-input"
                />
              </label>
            </div>
            <div className="when">
            {/* YEAR, MONTH, DAY, DOW, HOUR, MINUTE */}
              <p className="final-form-header">When should we meet?</p>
              <hr></hr>
              <Calendar onChange={this.onDateChange('date')} />

              <label>
                <input type="time" onChange={this.onTimeChange('starttime')} />
              </label>
              {console.log(this.state.starttime)}
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