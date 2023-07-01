let n1 = 5
console.log(n1);
// 5

let n2 = new Number(100);
console.log(n2);
// [Number: 100]

console.log(n2.toString().length);
// 3

let n3 = 123.446323
console.log(n3.toFixed(2));
// 123.45

console.log(n3.toPrecision(4));
// 123.4

let tuition = 1000000000;
console.log(tuition.toLocaleString());
console.log(tuition.toLocaleString('en-IN'));




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MATHS
console.log(Math);
// object


console.log(Math.abs(-5));
// converts to positive
// 5

console.log(Math.round(4.4));
// 4

console.log(Math.ceil(4.1));
// 5

console.log(Math.floor(4.9));
// 4


console.log(Math.random());
// between 0 and 1

console.log(Math.random()*10);
// 0 and 9


console.log(Math.floor(Math.random()*10)+1);
// 1 and 10


let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// 10 and 20



