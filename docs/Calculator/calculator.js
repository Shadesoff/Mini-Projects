const themeLink = document.getElementById("theme");
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  if (themeLink.getAttribute("href") === "styles/light.css") {
    themeLink.setAttribute("href", "styles/dark.css");
  } else {
    themeLink.setAttribute("href", "styles/light.css");
  }
});
