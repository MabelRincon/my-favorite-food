import { minutes as minutesElem } from "./timerSetup.js";

const startButton = document.getElementById('start_button');
const stopButton = document.getElementById('stop_button'); 
let timerInterval;
let remainingMinutes, remainingSeconds;

function startTimer() {
    if (minutesElem.textContent === "00") {
        return;
    }

    parseTime();
    startCountdown();
}
function parseTime() {
    remainingMinutes = Number(minutesElem.textContent);
    remainingSeconds = Number(document.getElementById('seconds').textContent);
}
function startCountdown() {
    timerInterval = setInterval(countdownTick, 1000);
}
function countdownTick() {
    if (remainingSeconds > 0) {
        remainingSeconds--;
    } else if (remainingMinutes > 0) {
        remainingSeconds = 59;
        remainingMinutes--;
    } else {
        clearInterval(timerInterval);
        reloadPage();
    }

    updateDisplay();
}
function updateDisplay() {
    minutesElem.textContent = formatTime(remainingMinutes);
    document.getElementById('seconds').textContent = formatTime(remainingSeconds);
}
function formatTime(time) {
    return time.toString().padStart(2, '0');
}
function reloadPage() {
    window.location.reload();
}
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
