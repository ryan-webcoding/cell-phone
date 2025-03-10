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

//adding button functionality
document.addEventListener("DOMContentLoaded", function () {
  function setupButton(button, defaultText, toggledText) {
    let isToggled = false;

    button.addEventListener("click", function () {
      isToggled = !isToggled;
      button.textContent = isToggled ? toggledText : defaultText;
      button.style.transform = "scale(1)";
    });

    button.addEventListener("mouseover", function () {
      if (!isToggled) button.style.transform = "scale(0.9)";
    });

    button.addEventListener("mouseleave", function () {
      if (!isToggled) button.style.transform = "scale(1)";
    });
  }

  setupButton(
    document.getElementById("friend-request-button"),
    "Send Friend Request",
    "Friend Request Sent"
  );

  setupButton(
    document.getElementById("report-spam-button"),
    "Report Spam",
    "Spam Reported"
  );
});

//scroll effect
const scrollContainer = document.getElementById("scroll-container");
const scrollContent = document.getElementById("entire-chatlog-container");

let currentTop = 0;
let isMouseInside = false;

// Detect if the mouse is inside the scrollable div
scrollContainer.addEventListener("mouseenter", () => (isMouseInside = true));
scrollContainer.addEventListener("mouseleave", () => (isMouseInside = false));

document.addEventListener(
  "wheel",
  function (event) {
    if (isMouseInside) {
      event.preventDefault(); // Prevent viewport scrolling
      let maxScroll = scrollContainer.clientHeight - scrollContent.clientHeight;
      currentTop -= event.deltaY; // Adjust position based on scroll

      if (currentTop > 0) {
        currentTop = 0; // Prevent scrolling beyond top
      } else if (currentTop < maxScroll) {
        currentTop = maxScroll; // Prevent scrolling beyond bottom
      }

      scrollContent.style.top = currentTop + "px";
    }
    // If mouse is outside, allow default page scrolling
  },
  { passive: false }
);
