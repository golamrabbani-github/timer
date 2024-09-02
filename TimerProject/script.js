let timer = document.getElementById("timer");
let h3 = document.getElementById("h3");

let secondDisply = document.getElementById("second");
let munitsDisply = document.getElementById("munits");
let hoursDisply = document.getElementById("hours");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let restartButton = document.getElementById("restart");

let seconds = 0;
let munites = 0;
let hours = 1;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds == 20) {
      munites++;
      seconds = 0;
      if (munites == 20) {
        hours++;
        munites = 0;
        seconds = 0;
        if (hours == 13) {
          hours = 1;
          munites = 0;
          seconds = 0;

          document.getElementById("am").style.display = "flex";
        }
      }
    }

    secondDisply.textContent = String(seconds).padStart(2, "0");
    munitsDisply.textContent = String(munites).padStart(2, "0");
    hoursDisply.textContent = String(hours).padStart(2, "0");
  }, 0);
}
startButton.addEventListener("click", () => {
  startTimer();
});

function stopTimer() {
  clearInterval(intervalId);
}
stopButton.addEventListener("click", () => {
  stopTimer();
});

function restartTimer() {
  clearInterval(intervalId);
  seconds = 0;
  munites = 0;
  hours = 0;

  secondDisply.textContent = "00";
  munitsDisply.textContent = "00";
  hoursDisply.textContent = "00";
}
restartButton.addEventListener("click", () => {
  restartTimer();
});

//
