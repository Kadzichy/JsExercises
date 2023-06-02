window.onload = function() {
const array = ['item 1', 'item 2', 'item 3'];
  const list = document.getElementById('myList');
  for (let i = 0; i < array.length; i++) {
    const listItem = document.createElement('li');
    const text = document.createTextNode(array[i]);
    listItem.appendChild(text);
    list.appendChild(listItem);
  }

let employees = [
    {name: 'employee1', age: 30, salary: 400}, 
    {name: 'employee2', age: 31, salary: 500}, 
    {name: 'employee3', age: 32, salary: 600}, 
];
let table = '<table><thead><tr><th>Name</th><th>Age</th><th>Salary</th></tr></thead><tbody>';
for (let i = 0; i < employees.length; i++) {
    table += '<tr><td>' + employees[i].name + '</td><td>' + employees[i].age + '</td><td>' + employees[i].salary + '</td></tr>';
}
table += '</tbody></table>';
document.body.innerHTML = table;
