let arr = [];
for (let i = 0, k = 1; i < 4; 
	i++) { 
	arr[i] = [];
	for (let j = 0; j < 2; j++) {
		arr[i].push(k++);
	}
}
console.log(arr);

let arr2 = [];
let k = 0;
for (let i = 0; i < 4; i++) {
    arr2[i] = [];
    for (let j = 0; j < 3; j++) {
        k += 2
        arr2[i].push(k);
    }
}
console.log(arr2)
