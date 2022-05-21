function countdown() {
  const now = new Date();
  const next_year = now.getFullYear() + 1;

  const next_year_date = new Date(next_year, 0);

  const mSec_diff = next_year_date.getTime() - now.getTime();
  const seconds = Math.floor(mSec_diff / 1000);

  const days = Math.floor(seconds / 3600 / 24);

  const hours = Math.floor((seconds / 3600) % 24);

  const minutes = Math.floor((seconds / 60) % 60);

  const seconds_to_show = Math.floor(seconds % 60);
  document.querySelector(".days-text").innerHTML = days;
  document.querySelector(".hours-text").innerHTML = hours;
  document.querySelector(".minutes-text").innerHTML = minutes;
  document.querySelector(".seconds-text").innerHTML = seconds_to_show;
}
countdown();
setInterval(countdown, 1000);
