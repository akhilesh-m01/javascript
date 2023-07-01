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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// stack and heap memory in javascript

// stack -> primitive -->copy
// heap -> non-primitive  -->reference(original value)

let val1 = "cricket";
let val2 = val1; // val2 got a copy of val1
console.log(val2);
// cricket

val2 = "football";
console.log(val2);
// football

console.log(val1);
// cricket


let myObj1 = {
    name:"akhilesh",
    favgame: "football",
}

console.log(myObj1);
// { name: 'akhilesh', favgame: 'football' }

let myObj2 = myObj1; //points to myobj1 address

myObj2.favgame = "cricket";
console.log(myObj1);
// { name: 'akhilesh', favgame: 'cricket' }

console.log(myObj2);
// { name: 'akhilesh', favgame: 'cricket' }


