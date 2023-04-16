let text = document.querySelectorAll(".par");
for (let elem of text) {
    elem.addEventListener("click", func1);
}
function func1() {
    this.textContent = Math.pow(Number(this.textContent), 2)
}
