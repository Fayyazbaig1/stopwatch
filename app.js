var hours = 0;
var minutes = 0;
var seconds = 0;

var hoursVal = document.getElementById("hours");
var minutesVal = document.getElementById("minutes");
var secondsVal = document.getElementById("seconds");

var startBtn = document.getElementById("startbtn");
var stopBtn = document.getElementById("stopbtn");
var resetBtn = document.getElementById("resetbtn");

var interval;

function renderVal() {
    hoursVal.innerHTML = hours.toString().padStart(2, "0");
    minutesVal.innerHTML = minutes.toString().padStart(2, "0");
    secondsVal.innerHTML = seconds.toString().padStart(2, "0");
}

function timeStart() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
    }
    renderVal();
}

function timer() {
    interval = setInterval(function() {
        timeStart();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
    startBtn.style.backgroundColor = "#ccc";
    stopBtn.style.backgroundColor = "#007bff";
}

function stop() {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
    startBtn.style.backgroundColor = "#007bff";
    stopBtn.style.backgroundColor = "#ccc";
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    stop();
    renderVal();
    resetBtn.disabled = true;
    startBtn.style.backgroundColor = "#007bff";
    stopBtn.style.backgroundColor = "#007bff";
}




