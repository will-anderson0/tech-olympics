let timer;
let clockTimer;
let timeRemaining;
let isTimerRunning = false;

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

function padNumber(num) {
  return num.toString().padStart(2, "0");
}

function startTimer() {
  if (isTimerRunning) return;

  clearInterval(clockTimer);
  let minutes = parseInt(document.getElementById("minutesInput").value) || 0;
  timeRemaining = minutes * 60;
  isTimerRunning = true;

  document.getElementById("status").innerHTML = "Mode: Timer";

  timer = setInterval(() => {
    timeRemaining--;
    let mins = Math.floor(timeRemaining / 60);
    let secs = timeRemaining % 60;
    document.getElementById("display").innerHTML = `${padNumber(
      mins
    )}:${padNumber(secs)}`;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      isTimerRunning = false;
      showClock();
    }
  }, 1000);
}

function showClock() {
  if (isTimerRunning) return;

  clearInterval(clockTimer);
  document.getElementById("status").innerHTML = "Mode: Clock";

  clockTimer = setInterval(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    document.getElementById("display").innerHTML = `${padNumber(
      hours
    )}:${padNumber(minutes)}:${padNumber(seconds)}`;
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  showClock();
}

// Start with clock display
showClock();
