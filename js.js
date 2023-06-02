window.onload = function() {
let employees = [
        {name: 'employee1', age: 29, salary: 400}, 
        {name: 'employee2', age: 30, salary: 500}, 
        {name: 'employee3', age: 31, salary: 600}, 
      ];
      for (let i = 0; i < employees.length; i++) {
        let tr = document.createElement('tr');
        let nameTd = document.createElement('td');
        nameTd.innerText = employees[i].name;
        let ageTd = document.createElement('td');
        ageTd.innerText = employees[i].age;
        ageTd.classList.add('age'); 
        let salaryTd = document.createElement('td');
        salaryTd.innerText = employees[i].salary;
        tr.appendChild(nameTd);
        tr.appendChild(ageTd);
        tr.appendChild(salaryTd);
        document.querySelector('tbody').appendChild(tr);
      }

      let ageTds = document.querySelectorAll('.age');
      ageTds.forEach(td => {
        td.addEventListener('click', () => {
          let age = parseInt(td.innerText);
          td.innerText = age + 1;
        });
      });
    }
