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

//scrolling effect
document.addEventListener("DOMContentLoaded", function () {
  const chatlogContainer = document.getElementById("entire-chatlog-container");

  if (!chatlogContainer) return;

  // Set max height and enable scrolling
  chatlogContainer.style.maxHeight = "60vh";
  chatlogContainer.style.overflowY = "auto";
  chatlogContainer.style.overflowX = "hidden"; // Prevent horizontal scroll

  chatlogContainer.addEventListener(
    "wheel",
    function (event) {
      // Prevent page from scrolling when hovering over chatlog
      if (chatlogContainer.scrollHeight > chatlogContainer.clientHeight) {
        event.preventDefault();
        chatlogContainer.scrollTop += event.deltaY;
      }
    },
    { passive: false }
  );
});

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
