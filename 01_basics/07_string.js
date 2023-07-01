let name = "Akhilesh";

let repoCount = 10;

console.log(name + " - " +repoCount);

// string interpolation
console.log(`my name is ${name} and i have ${repoCount} repositories..!`);


// indexing
console.log(name[0]);
// A


console.log(name.__proto__);
// {}

console.log(name.length);
// 8

console.log(name.toUpperCase());
// AKHILESH -->not the original value is changed

console.log(name.indexOf('e'));
// 5


console.log(name.charAt(2));
// h

let newName = name.substring(0,5);
console.log(newName);
// Akhil

let newName2 = name.slice(-3);
console.log(newName2);
// esh -> '-' indicates reverse indexing (from the last)


let mystr = "   justspace   ";
console.log(mystr);
// "   justspace   "
console.log(mystr.trim());
// justspace

let myurl = "https://akhilesh.com/akhilesh m";
console.log(myurl.replace(" ","%20"));
// https://akhilesh.com/akhilesh%20m

console.log(myurl.includes("malish"));
// false

console.log(myurl.split("/"));
// [ 'https:', '', 'akhilesh.com', 'akhilesh m' ]