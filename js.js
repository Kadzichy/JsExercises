function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

func()();
func()();
func()();

let counter = 0;	
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let func = test;

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();
