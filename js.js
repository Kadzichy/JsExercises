window.onload = function() {
const input = document.getElementById('input');
const select = document.getElementById('select');
input.addEventListener('blur', () => {
  const value = parseInt(input.value);
  if (!isNaN(value)) {
    select.selectedIndex = value - 1;
  }
});
