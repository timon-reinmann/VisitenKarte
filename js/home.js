const wrapper = document.querySelector(".wrapper");
const backLink = document.querySelector(".back-link");
const registerLink = document.querySelector(".link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

backLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
