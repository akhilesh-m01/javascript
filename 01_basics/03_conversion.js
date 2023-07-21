let score = 33;

console.log(typeof score);
// number

let count="45";
console.log(typeof count);
// string

let mycast = Number(count);
console.log(typeof mycast);
// number

console.log(mycast);
// 45

let myid = "G-011122"
console.log(typeof myid);
// string

let mycast2 = Number(myid);
console.log(typeof mycast2);
// number

console.log(mycast2);
// NaN - not a number


let planet = null;

console.log(planet);
// null

let pnum = Number(planet);
console.log(pnum);
// 0

let planet2 = undefined;

console.log(planet2);
// undefined

let pnum2 = Number(planet2);
console.log(pnum2);
// NaN


// "33" = 33
// "33ABC" = NaN
// True = 1 /false = 0

// type casting
// 1. Implicit Type Casting
// 2. Explicit Type Casting

// 1. Implicit type casting - It is done automatically by JS when performing operations between different data types
// 2. Explicit Type Casting - Manually convert from one datatype to another
// 2.1 - parseInt() and parseFloat()
// 2.2 - String() and .toString()
// 2.3 - Boolean()
// 2.4 - Number()
