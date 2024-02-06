const readline = require("readline");

function getArgs(args) {
  const res = {};

  const [, , ...restArgs] = args;

  const possibleArgs = ["h", "m", "s"];

  restArgs.forEach((value) => {
    const arg = value.charAt(value.length - 1);
    const timeInput = value.substring(0, value.length - 1);

    if (possibleArgs.includes(arg) && !isNaN(timeInput)) {
      res[arg] = parseInt(timeInput, 10);
    }
  });

  return res;
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function startTimer(seconds) {
  let remainingSeconds = seconds;
  const timerInterval = setInterval(() => {
    const formattedTime = formatTime(remainingSeconds);

    if (remainingSeconds < 0) {
      clearInterval(timerInterval);
      console.log("\nTimer finished!");
      return;
    }

    remainingSeconds--;
    readline.cursorTo(process.stdout, 0);
    readline.clearLine(process.stdout, 1);
    process.stdout.write(`Time remaining: ${formattedTime}`);
  }, 1000);
}

module.exports = { getArgs, startTimer };
