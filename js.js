let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for (let employee of employees) {
	console.log(employee.name + ' - ' + 
		employee.salary); 
}

let employees1 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3', 
		salary: 500,
	},
];
let sum = 0;
for (let item of employees1) {
    sum += item.salary;
};
console.log(sum)

let employees2 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let sum2 = 0;
for (let item of employees2) {
    if (item.age >= 30) {
        sum2 += item.salary
    };
};
console.log(sum2);
