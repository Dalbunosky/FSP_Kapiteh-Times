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



export const quickSortMeetups = (meetupArr = []) =>{
    if(meetupArr.length < 2) return meetupArr;

    let pivot = meetupArr.shift();
    let left = [];
    let right = [];
    while(meetupArr.length > 0){
        if(meetupArr[0].starttime > pivot.starttime){ right.push(meetupArr.shift()) }
        else{ left.push(meetupArr.shift()) }
    }
    return (quickSortMeetups(left).concat([pivot],quickSortMeetups(right)));
}

export const quickSortCities = (cityArray, base = null) =>{
    const alphabet = {" ": 0, "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, 
        "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17,
        "R": 18, "S": 19, "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26
    }

    const subSortCities = (cityArr, home) =>{
        let foundHome = [];
        let comparedMetro;
        let compareLength;
        let left = [];
        let right = [];
        let popped;
        if(cityArr.length < 2) return cityArr;

        if (cityArr[cityArr.length-1].name === home){ foundHome = cityArr.pop() }
        let pivot = cityArr.pop();

        const pivotMetro = pivot.name.toUpperCase()
        while(cityArr.length > 0){
            if (cityArr[cityArr.length-1].name === home){ 
                foundHome = cityArr.pop();
                continue;
            }
            comparedMetro = cityArr[cityArr.length-1].name.toUpperCase();
            compareLength = Math.min(comparedMetro.length, pivotMetro.length);
            popped = false;

            // Now comparing city names
            for(let i=0; i< compareLength; i++){
                if(alphabet[comparedMetro[i]] < alphabet[pivotMetro[i]]){
                    left.push(cityArr.pop());
                    // console.log(left);
                    popped = true;
                    break;
                }
                else if(alphabet[comparedMetro[i]] > alphabet[pivotMetro[i]]){
                    right.push(cityArr.pop());
                    // console.log(right);
                    popped = true;
                    break;
                }
            }
            // One city has the entire name of another city. Compare by length of name.
            if(popped === false){
                if(comparedMetro.length < pivotMetro.length){
                    left.push(cityArr.pop())
                    // console.log(left);
                }
                else{
                    right.push(cityArr.pop())
                    // console.log(right);
                }
            }
        }
        const res = [...quickSortCities(left), pivot, ...quickSortCities(right)];
        if(!!foundHome) res.push(foundHome);

        return res.filter(el => !!el.name);
        // return res;
        // return([foundHome, ...quickSortCities(left), pivot, ...quickSortCities(right)]);
        // return (quickSortMeetups(left).concat([pivot],quickSortMeetups(right)));
    }
    return subSortCities(cityArray, base);
}

export const quickSortCities2 = (cityArr, home = null) =>{
    const alphabet = {" ": 0, "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, 
        "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17,
        "R": 18, "S": 19, "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26
    }
    
    let foundHome = [];
    let comparedMetro;
    let compareLength;
    let left = [];
    let right = [];
    let popped;
    if(cityArr.length < 2) return cityArr;

    if (cityArr[cityArr.length-1].name === home){ foundHome = cityArr.pop() }
    let pivot = cityArr.pop();

    const pivotMetro = pivot.name.toUpperCase()
    while(cityArr.length > 0){
        if (cityArr[cityArr.length-1].name === home){ 
            foundHome = cityArr.pop();
            continue;
        }
        comparedMetro = cityArr[cityArr.length-1].name.toUpperCase();
        compareLength = Math.min(comparedMetro.length, pivotMetro.length);
        popped = false;

        // Now comparing city names
        for(let i=0; i< compareLength; i++){
            if(alphabet[comparedMetro[i]] < alphabet[pivotMetro[i]]){
                left.push(cityArr.pop());
                popped = true;
                break;
            }
            else if(alphabet[comparedMetro[i]] > alphabet[pivotMetro[i]]){
                right.push(cityArr.pop());
                popped = true;
                break;
            }
        }
        // One city has the entire name of another city. Compare by length of name.
        if(popped === false){
            if(comparedMetro.length < pivotMetro.length){
                left.push(cityArr.pop())
            }
            else{
                right.push(cityArr.pop())
            }
        }
    }
    const res = [...quickSortCities(left), pivot, ...quickSortCities(right)];
    if(!!foundHome) res.push(foundHome);

    return res.filter(el => !!el.name);
    // return([foundHome, ...quickSortCities(left), pivot, ...quickSortCities(right)]);
    // return (quickSortMeetups(left).concat([pivot],quickSortMeetups(right)));
}

export const quickSortCities1 = (cityArr, home = null) =>{
    const alphabet = [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let foundHome = [];
    let comparedMetro;
    let compareLength;
    let left = [];
    let right = [];
    let shifted;
    if(cityArr.length < 2) return cityArr;

    if (cityArr[0].name === home){ foundHome = cityArr.shift() }
    let pivot = cityArr.shift();

    const pivotMetro = pivot.name.toUpperCase()
    while(cityArr.length > 0){
        if (cityArr[0].name === home){ 
            foundHome = cityArr.shift();
            continue;
        }
        comparedMetro = cityArr[0].name.toUpperCase();
        compareLength = Math.min(comparedMetro.length, pivotMetro.length);
        shifted = false;

        // Now comparing city names
        for(let i=0; i< compareLength; i++){
            if(alphabet.indexOf(comparedMetro[i]) < alphabet.indexOf(pivotMetro[i])){
                left.push(cityArr.shift());
                shifted = true;
                break;
            }
            else if(alphabet.indexOf(comparedMetro[i]) > alphabet.indexOf(pivotMetro[i])){
                right.push(cityArr.shift());
                shifted = true;
                break;
            }
        }
        // One city has the entire name of another city. Compare by length of name.
        if(shifted === false){
            if(comparedMetro.length < pivotMetro.length){left.push(cityArr.shift())}
            else{right.push(cityArr.shift())}
        }
    }
    const res = [...quickSortCities1(left), pivot, ...quickSortCities1(right)];
    return ((!!foundHome.length) ? res.unshift(foundHome) : res);
    // return([foundHome, ...quickSortCities(left), pivot, ...quickSortCities(right)]);
    // return (quickSortMeetups(left).concat([pivot],quickSortMeetups(right)));
}

// Puts meetups under metroes
export const orgMeetupsIntoMetroes = meetups => {
    let found;
    let metroes = [];
    while(meetups.length > 0){
        found = false
        for(let i = 0; i < metroes.length; i++){
            if (metroes[i].name === meetups[0].metro_area){
                metroes[i].meetups.push(meetups.shift());
                found = true;
                break;
            }
        }
        // metro not in list
        if (found === false){
            metroes.push({
                name: meetups[0].metro_area,
                meetups: [meetups.shift()]
            })
        }
    }
    return metroes;
}