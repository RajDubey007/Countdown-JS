


let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let days = document.getElementById('days');

let hourTime = document.getElementById("hourTime");
let minuteTime = document.getElementById("minuteTime");
let secondTime = document.getElementById("secondTime");
let dayTime = document.getElementById("dayTime");

let day = 0;
let hr = 0;
let min = 0;
let sec = 0;

let Interval;


const Timeset = () => {
    let dayset = JSON.parse(dayTime.value);
    let hrset = JSON.parse(hourTime.value);
    let minset = JSON.parse(minuteTime.value);
    let secset = JSON.parse(secondTime.value);

    day = dayset;
    hr = hrset;
    min = minset;
    sec = secset;
    Start();
}

// Timer function
const Start = () => {
    Interval = setInterval(() => {
        sec++;
        if (sec < 10) {
            seconds.innerHTML = "0" + sec;
        } else {
            seconds.innerHTML = sec;
        }

        if (sec > 59) {
            min++;
            sec = 0;
            if (min < 10) {
                minutes.innerHTML = "0" + min;
            } else {
                minutes.innerHTML = min;
            }
            if (min > 59) {
                hr++;
                min = 0;
                if (hr < 10) {
                    hours.innerHTML = "0" + hr;
                } else {
                    hours.innerHTML = hr;
                }
                if (hr > 23) {
                    day++;
                    hr = 0;
                    if (day < 10) {
                        days.innerHTML = "0" + day;
                    } else {
                        days.innerHTML = day;
                    }
                }
            }
        }
    }, 5);
}


const Stop = () => {
    
    clearInterval(Interval);

}


const Reset = () => {
    clearInterval(Interval);
    day = 0;
    hr = 0;
    min = 0;
    sec = 0;
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
}


