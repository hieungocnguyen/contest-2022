const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const slider = document.querySelector(".button-switch");
const switchMode = document.querySelector(".switch-mode");
const reactposts = document.querySelectorAll(".newsfeed_post_react");

switchMode.addEventListener("click", function () {
  slider.classList.toggle("apply_action");
  if (slider.classList.contains("apply_action")) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

reactposts.forEach(function (react) {
  react.addEventListener("click", function () {
    react.classList.toggle("reacted");
  });
});
