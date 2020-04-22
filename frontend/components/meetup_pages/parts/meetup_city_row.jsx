import MeetupCellContainer from './meetup_cell_container';

const CityRow = (props) =>{

    // componentDidMount() {
    //     this.props.requestAllCityMeetups(this.props.city);
    // };
    
    // componentWillReceiveProps(nextProps) {
    //     if (this.props.city !== nextProps.city) {
    //         this.props.requestAllCityMeetups(nextProps.city);
    //     }
    // };

    // render(){
        console.log(props);
        const { meetups } = props;
        return(
            <div className="cityRow">
                { meetups.map(meetup => <MeetupCellContainer key={meetup.id} meetup={meetup} />)}
            </div>
        )
    // }

    
}

export default CityRow;