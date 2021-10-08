const redInput = document.getElementById("red");
const blueInput = document.getElementById("blue");
const greenInput = document.getElementById("green");

redInput.addEventListener("change", () => {
  if (blueInput.checked && greenInput.checked) {
    blueInput.checked = false;
  }
});

blueInput.addEventListener("change", () => {
  if (redInput.checked && greenInput.checked) {
    greenInput.checked = false;
  }
});

greenInput.addEventListener("change", () => {
  if (redInput.checked && blueInput.checked) {
    redInput.checked = false;
  }
});
