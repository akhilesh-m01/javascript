// Primitive data types
// 7 types : string, number, bigint, boolean, null, undefined, Symbol

let id1 = Symbol('123')
let id2 = Symbol('123')
console.log(id1===id2);
// false




// JS is dynamically typed language

// Reference(non-primitive datatypes)
// arrays, objects, functions

const heros = ["ironman","spiderman","heman"]
// array
console.log(heros);
// [ 'ironman', 'spiderman', 'heman' ]


let myObj = {
    name: "akhilesh",
    age: 18,
}
// object
console.log(myObj);
// { name: 'akhilesh', age: 18 }

const myfun = function(){
    console.log("testing my function");
}
myfun()

