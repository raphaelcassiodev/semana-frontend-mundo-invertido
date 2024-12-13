const button = document.getElementById("switch-theme-button");
const body = document.querySelector("body");

function switchTheme() {
  if (body.classList.contains("light-theme")) {
    body.classList.toggle('dark-theme');
  }
}

button.addEventListener("click", switchTheme);
