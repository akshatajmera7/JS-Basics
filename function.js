const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const newYear = "1 Jan 2025";
function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  sec = (newYearDate - currentDate) / 1000;
  days = Math.floor(sec / 3600 / 24);
  hours = Math.floor((sec / 3600) % 24);
  minutes = Math.floor((sec / 60) % 60);
  seconds2 = Math.floor(sec % 60);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds2;
}
countdown();
setInterval(countdown, 1000);
