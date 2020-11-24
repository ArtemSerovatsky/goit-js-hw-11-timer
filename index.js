"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const date = new Date("Nov 29, 2020 23:59:59").getTime();

  const timeInterval = setInterval(() => {
    const time = date - new Date().getTime();

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    document.querySelector('[data-value="days"]').textContent = `${days}`;
    document.querySelector('[data-value="hours"]').textContent = `${hours}`;
    document.querySelector('[data-value="mins"]').textContent = `${mins}`;
    document.querySelector('[data-value="secs"]').textContent = `${secs}`;

    function pad(value) {
      return String(value).padStart(2, "0");
    }

    if (time < 0) {
      clearInterval(timeInterval);
      document.querySelector("#timer-1").innerHTML = "EXPIRED";
    }
  }, 1000);
});
