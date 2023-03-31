const daysDate = document.getElementById("days");
const hoursDate = document.getElementById("hours");
const minutesDate = document.getElementById("minutes");
const secondsDate = document.getElementById("seconds");

let countDownDate = new Date("Jun 23, 2023 14:34:54").getTime();

function beqa() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysDate.innerText = days;
  hoursDate.innerText = hours;
  minutesDate.innerText = minutes;
  secondsDate.innerText = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}
beqa();

setInterval(beqa, 1000);
