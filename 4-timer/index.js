const { startTimer, getArgs } = require("./timer.js");

const timeInput = getArgs(process.argv);

if (Object.keys(timeInput).length === 0) {
  console.log(
    "No arguments were provided! Arguments must be a number followed with time measurement: 1h 2m  3s",
  );
  return;
}

const secondsFromHours = timeInput["h"] * 3600 || 0;
const secondsFromMinutes = timeInput["m"] * 60 || 0;
const seconds = timeInput["s"] || 0;

startTimer(secondsFromHours + secondsFromMinutes + seconds);
