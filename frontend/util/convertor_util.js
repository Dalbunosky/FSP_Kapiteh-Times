export const onTimeChange = () => {
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

export const onDateChange = () => {
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

export const convertDOWtoInt = dow => {
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

export const convertMonthtoInt = dow => {
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

export const convertIntoMonth = int =>{
    const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "Septemmber", "October", "November", "December"];
    return months[int]
}


export const convertIntoDOW = int =>{
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[int]
}

export const arrayToDateTime = timeArr =>{ // [DOW, yr, month, day, hr, min]
    const day = `${convertIntoDOW(timeArr[0])}, ${convertIntoMonth(timeArr[2])} ${timeArr[3]}, ${timeArr[1]}`
    const determAMPM = convertoAMPM(timeArr[4])
    const time = `${determAMPM[0]}:${timeArr[5]} ${determAMPM[1]}`
}

export const convertIntoAMPM = hour =>{
    if(hour === 0){return [12, "AM"]}
    else if(hour < 12){return [hour, "AM"]}
    else if(hour === 12){return [12, "PM"]}
    else {return [hour, "PM"]}
}

// export const toggle12N24Hour = (currForm, hour, minute)(
//     currForm === "12Hr" ? 
// )

export const formatDate = (format, year, month, day) =>{
    if (format === "yyyy/mm/dd"){return(`${year}/${month}/${day}`)}
    else if (format === "mm/dd/yyyy"){return(`${month}/${day}/${year}`)}
    else if (format === "mm/dd/yyyy"){return(`${day}/${month}/${year}`)}
}

export const formatMinute = minute =>(minute < 10 ? `0${minute}` : minute)

export const quickSortMeetups = meetupArr =>{
    if(meetupArr.length < 2) return meetupArr;

    let pivot = meetupArr.shift();
    let left = [];
    let right = [];
    while(meetupArr.length > 0){
        if(meetupArr[0].starttime > pivot.starttime){ right.push(meetupArr.shift()) }
        else{ left.push(meetupArr.shift()) }
    }
    // meetupArr.forEach( meetup => {
    //     if(meetup.starttime > pivot.starttime){ right.push(meetup) }
    //     else{ left.push(meetup) }
    // })
    // console.log([...quickSortMeetups(left), pivot, ...quickSortMeetups(right)]);
    // console.log(quickSortMeetups(left).concat([pivot],quickSortMeetups(right)));

    // return ([...quickSortMeetups(left), pivot, ...quickSortMeetups(right)]);
    return (quickSortMeetups(left).concat([pivot],quickSortMeetups(right)));
  
}


export const quickSortCities = cityArr =>{
    let alphabet = [A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,I,i,J,j,K,k,L,l,M,m,N,n,O,o,P,p,Q,q,R,r,S,s,T,t,U,u,V,v,W,w,X,x,Y,y,Z,z];
    
    if(cityArr.length < 2) return cityArr;

    let pivot = cityArr.shift();
    let left = [];
    let right = [];
    while(cityArr.length > 0){
        if(cityArr[0].starttime > pivot.starttime){ right.push(cityArr.shift()) }
        else{ left.push(cityArr.shift()) }
    }
    return (quickSortMeetups(left).concat([pivot],quickSortMeetups(right)));
}