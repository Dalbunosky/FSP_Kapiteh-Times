import { connect } from "react-redux";
import CityRow from "./meetup_city_row";
import { createMeetup } from "../../actions/meetup_actions";
import { clearMeetupErrors } from '../../actions/meetup_actions';

const mapSTP = (state) => {
    // console.log(state);
    return({
    // Meetups that are taking place in this CityRow's city
    errors: state.errors,
    meetups: state.meetups,
    host: state.users[state.session.id]
    // users: state.users // Save for now for future guests
});}

const mapDTP = dispatch => ({   
    // functions to send to meetup. Not sure on necessaity.
    // Join meetup, leave meetup
    processForm: meetup => dispatch(createMeetup(meetup)),
    clearErrors: () => dispatch(clearMeetupErrors())
})

export default connect(mapSTP, mapDTP)(CityRow);