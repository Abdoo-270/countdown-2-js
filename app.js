const kalanDays = document.getElementById("days");
const kalanHours = document.getElementById("hours");
const kalanMins = document.getElementById("mins");
const kalanSecs = document.getElementById("secs");

const currentDate = Date.now();
const lastDate = new Date();
lastDate.setFullYear(2022);
lastDate.setMonth(8);
lastDate.setDate(21);
lastDate.setHours(11);
lastDate.setMinutes(30);
lastDate.setSeconds(0);

const kalanInSec = (lastDate - currentDate) / 1000;

const days = kalanInSec / (60 * 60 * 24);
const daysInInt = Math.trunc(days);

const hours = (days - daysInInt) * 24;
const hoursInInt = Math.trunc(hours);

const mins = (hours - hoursInInt) * 60;
const minsInInt = Math.trunc(mins);

const secs = (mins - minsInInt) * 60;
const secsInInt = Math.trunc(secs);

kalanDays.innerHTML = daysInInt;
kalanHours.innerHTML = hoursInInt;
kalanMins.innerHTML = minsInInt;
kalanSecs.innerHTML = secsInInt;

setInterval(counter, 1000);
function counter() {
  const kalanDays = document.getElementById("days");
  const kalanHours = document.getElementById("hours");
  const kalanMins = document.getElementById("mins");
  const kalanSecs = document.getElementById("secs");

  const currentDate = Date.now();
  const lastDate = new Date();
  lastDate.setFullYear(2025);
  lastDate.setMonth(3);
  lastDate.setDate(15);
  lastDate.setHours(11);
  lastDate.setMinutes(30);
  lastDate.setSeconds(0);

  const kalanInSec = (lastDate - currentDate) / 1000;

  const days = kalanInSec / (60 * 60 * 24);
  const daysInInt = Math.trunc(days);

  const hours = (days - daysInInt) * 24;
  const hoursInInt = Math.trunc(hours);

  const mins = (hours - hoursInInt) * 60;
  const minsInInt = Math.trunc(mins);

  const secs = (mins - minsInInt) * 60;
  const secsInInt = Math.trunc(secs);

  kalanDays.innerHTML = daysInInt;
  kalanHours.innerHTML = hoursInInt;
  kalanMins.innerHTML = minsInInt;
  kalanSecs.innerHTML = secsInInt;
}
