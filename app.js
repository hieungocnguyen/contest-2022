const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const slider = document.querySelector(".button-switch");
const switchMode = document.querySelector(".switch-mode");
const reactposts = document.querySelectorAll(".newsfeed_post_react");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const inputTextArea = document.querySelector(".post_input");
const buttonPost = document.querySelector(".button_post");
const contentPost = document.querySelector(".content");
const targetInsert = document.querySelector(".target_insert");

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

contentPost.addEventListener("click", function () {
  modal.classList.toggle("active_model");
  inputTextArea.value = "";
  buttonPost.classList.add("disable");
});

close.addEventListener("click", function () {
  modal.classList.toggle("active_model");
});

inputTextArea.addEventListener("input", function () {
  if (inputTextArea.value === "") {
    buttonPost.classList.add("disable");
  } else {
    buttonPost.classList.remove("disable");
  }
});

buttonPost.addEventListener("click", function () {
  if (inputTextArea.value !== "") {
    targetInsert.innerHTML = inputTextArea.value;
    modal.classList.toggle("active_model");
  }
});
