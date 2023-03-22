function test() {
	let num = 1;
	function func() {
		console.log(num);
	}
	func();
}
test();

function tes1() {
	let num1 = 1;
	
	function func1() {
		console.log(num1);
	}
}
test1();

function test2() {
	let num2 = 1;
	function func2() {
		console.log(num2);
	}
	func2();
}

function test3() {
	let num3;
	function func3() {
		console.log(num3);
	}
	num3 = 1
	func3();
	
	num3 = 2
	func3();
}
test3();

function test4(num1, num2) {
	function func4() {
		console.log(num1 + num2);
	}
	func4();
}
test4(1, 2);
