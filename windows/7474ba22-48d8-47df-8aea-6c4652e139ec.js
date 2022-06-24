startClockTime();
startClockdate();

//start the clock
function startClockTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkClockTime(m);
    s = checkClockTime(s);
    document.getElementById('7474ba22-48d8-47df-8aea-6c4652e139ec-time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startClockTime, 1000);
}

//checks the clock
function checkClockTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

//start the date
function startClockdate() {
    const todaydate = new Date();
    let d = todaydate.getDate();
    let m = todaydate.getMonth() + 1;
    let y = todaydate.getFullYear();
    d = checkClockDate(d);
    m = checkClockDate(m);
    document.getElementById('7474ba22-48d8-47df-8aea-6c4652e139ec-date').innerHTML = d + ":" + m + ":" + y;
    setTimeout(startClockdate, 1000);
}
//checks the clock
function checkClockDate(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function copyTimeDate(type) {
    const eventDate = new Date();
    const jsonEventDate = eventDate.toJSON();
  
    if (type === "JSON") { navigator.clipboard.writeText(jsonEventDate); alert("UTC Time is " + jsonEventDate + " and is now copied") }
    else if (type === "UTC") { navigator.clipboard.writeText(new Date(jsonEventDate).toUTCString()); alert("UTC Time is " + new Date(jsonEventDate).toUTCString() + " and is now copied") }
    else if (type === "TS") { navigator.clipboard.writeText(new Date(jsonEventDate).toTimeString()); alert("UTC Time is " + new Date(jsonEventDate).toTimeString() + " and is now copied") }
    else if (type === "DS") { navigator.clipboard.writeText(new Date(jsonEventDate).toDateString()); alert("UTC Time is " + new Date(jsonEventDate).toDateString() + " and is now copied") }
    else if (type === "S") { navigator.clipboard.writeText(new Date(jsonEventDate).toString()); alert("UTC Time is " + new Date(jsonEventDate).toString() + " and is now copied") }
    else if (type === "LS") { navigator.clipboard.writeText(new Date(jsonEventDate).toLocaleString()); alert("UTC Time is " + new Date(jsonEventDate).toLocaleString() + " and is now copied") }
    else if (type === "LTS") { navigator.clipboard.writeText(new Date(jsonEventDate).toLocaleTimeString()); alert("UTC Time is " + new Date(jsonEventDate).toLocaleTimeString() + " and is now copied") }
    else if (type === "LDS") { navigator.clipboard.writeText(new Date(jsonEventDate).toLocaleDateString()); alert("UTC Time is " + new Date(jsonEventDate).toLocaleDateString() + " and is now copied") }
  }
