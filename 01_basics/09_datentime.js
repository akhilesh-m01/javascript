// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());

console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());

console.log(typeof myDate);

let myDate2 = new Date(2023,6,3);
console.log(myDate2.toDateString());
let myDate3 = new Date("2023-07-03");
console.log(myDate3.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp); //gives the milliseconds from 1970
