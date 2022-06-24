startTime();
startdate();

//start the clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('taskbar-clock-time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

//checks the clock
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

//start the date
function startdate() {
    const todaydate = new Date();
    let d = todaydate.getDate();
    let m = todaydate.getMonth() + 1;
    let y = todaydate.getFullYear();
    d = checkDate(d);
    m = checkDate(m);
    document.getElementById('taskbar-clock-date').innerHTML = d + ":" + m + ":" + y;
    setTimeout(startdate, 1000);
}
//checks the clock
function checkDate(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}