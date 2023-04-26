const select1 = document.getElementById('mySelect');
const button = document.getElementById('btn');
button.addEventListener('click', function() {
  const selectedOption = select1.options[select1.selectedIndex];
  alert(selectedOption.textContent);
});

let select2 = document.getElementById('mySelect');
let button1 = document.getElementById('myButton');
button1.addEventListener('click', function() {
  let selectedOption = select2.options[select2.selectedIndex];
  selectedOption.textContent += '!';
});
}
