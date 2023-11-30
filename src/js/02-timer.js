import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate.getTime() - now().getTime() > 0) {
      btnStart.disabled = false;
      let intervalId;

      btnStart.addEventListener('click', () => {
        btnStart.disabled = true;
        const timer = convertMilliseconds(
          selectedDate.getTime() - now().getTime()
        );

        let days = timer.days;
        let hours = timer.hours;
        let minutes = timer.minutes;
        let seconds = timer.seconds;

        timerSec.textContent = show(seconds);
        timerMin.textContent = show(minutes);
        timerHours.textContent = show(hours);
        timerDays.textContent = show(days);

        intervalId = setInterval(() => {
          if (seconds > 0) {
            seconds--;
            timerSec.textContent = show(seconds);
          } else if (minutes > 0) {
            minutes--;
            seconds = 59;
            timerMin.textContent = show(minutes);
            timerSec.textContent = show(seconds);
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            timerHours.textContent = show(hours);
            timerMin.textContent = show(minutes);
          } else if (days > 0) {
            days--;
            hours = 23;
            timerDays.textContent = show(days);
            timerHours.textContent = show(hours);
          } else {
            clearInterval(intervalId);
          }
        }, 1000);
      });
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

function show(num) {
  return String(num).padStart(2, '0');
}
function now() {
  return new Date();
}

const inputPicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days');
const timerHours = document.querySelector('[data-hours');
const timerMin = document.querySelector('[data-minutes');
const timerSec = document.querySelector('[data-seconds');

btnStart.setAttribute('disabled', 'disabled');

flatpickr(inputPicker, options);

function convertMilliseconds(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days: days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}
