
let bodyCon = document.getElementById("bodyCon");
let clockBody = document.getElementById("clockBody");
let clockTime = document.getElementById("clockTime");
let switchBtn = document.getElementById("darkMode");
let lightmode = true;
let time12 = true;
let amPm = document.getElementById("am/pm");
let timeFormat = document.getElementById("timeFormat");

let clockIntervalId = setInterval(updateClock24, 1000); // Start with 24-hour format

function updateClock24() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format time to HH:MM:SS
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  clockTime.textContent = currentTime;
  amPm.style.display = "none"; // Hide AM/PM in 24-hour format
}

function updateClock12() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = "AM";

  // Convert 24-hour to 12-hour format
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours = hours - 12;
    }
  }
  if (hours === 0) {
    hours = 12; // midnight case
  }

  // Add leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  clockTime.textContent = currentTime;
  amPm.textContent = period;
  amPm.style.display = "inline"; // Show AM/PM in 12-hour format
}

function switchTimeFormat() {
  clearInterval(clockIntervalId); // Stop current interval

  if (time12) {
    updateClock12();
    clockIntervalId = setInterval(updateClock12, 1000);
    timeFormat.textContent = "Switch to 24-hour format";
    time12 = false;
  } else {
    updateClock24();
    clockIntervalId = setInterval(updateClock24, 1000);
    timeFormat.textContent = "Switch to 12-hour format";
    time12 = true;
  }
}

function darkMode() {
  if (lightmode) {
    lightmode = false;
    bodyCon.style.backgroundColor = "#000000";
    clockBody.style.backgroundColor = "gray";
    switchBtn.innerHTML = " Light Mode ";
    let iconE = document.createElement("i");
    iconE.classList.add("fa-solid", "fa-sun", "lcolor");
    switchBtn.appendChild(iconE);
  } else {
    lightmode = true;
    bodyCon.style.backgroundColor = "lightgray";
    clockBody.style.backgroundColor = "white";
    switchBtn.innerHTML = " Dark Mode ";
    let iconE = document.createElement("i");
    iconE.classList.add("fa-regular", "fa-moon", "color");
    switchBtn.appendChild(iconE);
  }
}
