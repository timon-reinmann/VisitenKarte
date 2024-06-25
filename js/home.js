const wrapper = document.querySelector(".wrapper");
const backLink = document.querySelector(".back-link");
const registerLink = document.querySelector(".link");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

backLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
