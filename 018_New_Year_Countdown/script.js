const day = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const currentYear = new Date().getFullYear();

// set the new year as the current date plus one year
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update Countdown time
// set a function for calculating the gap between the old year and new year
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  // The original data of d would be the seconds of days
  const d = Math.floor(diff / 1000 / 60 /60 / 24);
  const h = Math.floor(diff / 1000 / 60 /60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;

}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display='flex';
}, 1000)

// Run every second
setInterval(updateCountdown, 1000);