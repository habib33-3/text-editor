// Text Editor content
const textAreaElement = document.querySelector("#text-editor");
let textContent = textAreaElement.value;

// Change text style

// Bold Style
document.querySelector("#bold").addEventListener("click", function () {
  textAreaElement.style.fontWeight = "bold";
  console.log(textContent);
});

// Italic Style
document.querySelector("#italic").addEventListener("click", function () {
  textAreaElement.style.fontStyle = "italic";
  console.log(textContent);
});

// Underline Style
document.querySelector("#underline").addEventListener("click", function () {
  textAreaElement.style.textDecoration = "underline";
  console.log(textContent);
});

// Change text align

// Align Center
document.querySelector("#center").addEventListener("click", function () {
  textAreaElement.style.textAlign = "center";
});

// Align right
document.querySelector("#right").addEventListener("click", function () {
  textAreaElement.style.textAlign = "right";
});

// Align left
document.querySelector("#left").addEventListener("click", function () {
  textAreaElement.style.textAlign = "left";
});

// Align justify
document.querySelector("#justify").addEventListener("click", function () {
  textAreaElement.style.textAlign = "justify";
});

// Change font size
const textSizeInput = document.querySelector("#text-size");

textSizeInput.addEventListener("input", function () {
  const textSize = textSizeInput.value + "px";
  textAreaElement.style.fontSize = textSize;
});

// Change text color
const textColorInput = document.querySelector("#color");

textColorInput.addEventListener("input", function () {
  const textColor = textColorInput.value;
  textAreaElement.style.color = textColor;
});
