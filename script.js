function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

function updateCurrentUTCTime() {
  const currentTimeInMilliseconds = Date.now();
  const currentTime = new Date(currentTimeInMilliseconds);
  const hours = currentTime.getUTCHours().toString().padStart(2, "0");
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = currentTime
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");

  const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `${timeString}`;
}

document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = ` ${getCurrentDayOfTheWeek()}`;

updateCurrentUTCTime();

setInterval(updateCurrentUTCTime, 1);
