let a;
let time;
let date;
const locals = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(locals, options);
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
    // document.getElementById('time').innerHTML = time + " on " + date;


    // Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012

}, 1000);