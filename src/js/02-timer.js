import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputPicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const dataElem = document.querySelectorAll('.value');

/* Solution throw object */
// const obj = {
//   days: document.querySelector('[data-days'),
//   hours: document.querySelector('[data-hours'),
//   minutes: document.querySelector('[data-minutes'),
//   seconds: document.querySelector('[data-seconds'),
// };

btnStart.setAttribute('disabled', 'disabled');

let selectedDate;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate.getTime() - now().getTime() > 0) {
      btnStart.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  inputPicker.disabled = true;

  intervalId = setInterval(() => {
    const currTime = selectedDate.getTime() - now().getTime();
    if (currTime < 1000) {
      clearInterval(intervalId);
    }
    const timer = convertMilliseconds(currTime);
    Object.entries(timer).forEach(([, value], index) => {
      // obj[key].textContent = show(value); // solution throw object. In this case we need to write [key, value]
      dataElem[index].textContent = show(value);
    });
  }, 1000);
});

function show(num) {
  return String(num).padStart(2, '0');
}
function now() {
  return new Date();
}

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
