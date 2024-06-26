const range = document.getElementById("range");
const output = document.getElementById("output");

range.addEventListener("input", () => {
  output.innerText = range.value;
  console.log("sd");
});
