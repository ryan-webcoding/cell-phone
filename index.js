//dynamically update time
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();

  // Get hours and minutes
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Format minutes to always have two digits (e.g., 9 -> 09)
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Set formatted time
  timeElement.textContent = `${hours}:${minutes}`;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
