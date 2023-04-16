let elem = document.getElementById('elem');
elem.textContent = 'text'

let elems = document.getElementsByTagName('li');
for (let elem of elems) {
    elem.textContent += '!'
}

let elems2 = document.getElementsByClassName('www');
for (let elem of elems2) {
    elem.innerHTML = '!!!';
}
