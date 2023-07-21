"use strict"; //treat all code as newer version

// alert(3+3); as we are using node, we can't alert

let name = "akhilesh";
let age = 18;
let isLoggedIn = true;

console.log(typeof(name));
// string

console.log(typeof(age));
// number

console.log(typeof isLoggedIn);
// boolean

let country;
console.log(typeof(country));
// undefined

let planet = null;
console.log(typeof(planet));
// object

console.log(typeof(undefined));
// undefined

console.log(typeof null);
// object


// datatypes:
// 1.Number => 2^53
// 2.bigint =>very large values
// 3.boolean => true or false
// 4.string =>" "
// 5.undefined =>not initialised
// 6.null => standalone value
// 7.symbol => unique

// 8.object

// revision

// Primitive
// 1. Number - integers and floating-point numbers
// 2. String - sequence of characters
// 3. Boolean - true or false
// 4. null - Intentional absence of value which is considered as an object by default
// 5. undefined - declared but you have not assigned any value
// 6. Symbol - Unique identifier


// Non-primitive datatypes
// 1. objects  - key:value pairs, contains properties and methods
// 2. array - sequence of elements
// 3. function - can be assigned to variables, passed as parameters and can be returned from a function.
// 4. Date
// 5. Regular Expressions
