const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStop.setAttribute('disabled', 'disabled');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let timerId = null;
function changeColor() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function stopChangeColor() {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopChangeColor);
