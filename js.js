window.onload = function() {
const select = document.getElementById("mySelect");
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  const selectedOption = select.options[select.selectedIndex].text;
  paragraph.textContent = selectedOption;
