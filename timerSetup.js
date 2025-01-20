const minutesElem = document.getElementById('minutes');
const timerButtons = document.querySelectorAll('.timer_button');
function setTimerMinutes(event) {
    const mins = event.target.textContent.padStart(2, '0');
    minutesElem.textContent = mins;
}

timerButtons.forEach(button => button.addEventListener('click', setTimerMinutes));

export { minutesElem as minutes };
