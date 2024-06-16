let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


function displayTime(){

    let  date  = new Date();


    let hh =  date.getHours();
    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();


    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    
    hr.style.transform = `rotate(${hRotation}deg)`;
    hr.style.transform = `rotate(${mRotation}deg)`;
    hr.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime,1000);