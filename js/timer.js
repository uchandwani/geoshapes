
// timer.js

let startTime = null;
let totalElapsed = 0;

export function startTracking() {
  console.log("Triggered startTracking");
  const saved = JSON.parse(localStorage.getItem("exercise_time_tracking")) || {};
  totalElapsed = saved.totalElapsed || 0;
  startTime = Date.now();
}

export function getElapsedSeconds() {
  console.log("The getElapseSeconds function triggered");
  const now = Date.now();
  const sessionElapsed = Math.floor((now - startTime) / 1000);
  console.log("The Elapsed time is ", totalElapsed);
  return totalElapsed + sessionElapsed;
}

export function saveElapsedToLocal(topicId, subtype, buttonType) {
  const key = `exercise_time_tracking`;
  localStorage.setItem(key, JSON.stringify({
    totalElapsed: getElapsedSeconds(),
    topicId, subtype, buttonType
  }));
}

export function clearTracking() {
  localStorage.removeItem("exercise_time_tracking");
}
