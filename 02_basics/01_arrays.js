// arrays

const myArr = [1,2,3,4,5];
console.log(myArr);

const myArr2 = new Array("akhil","akhilesh","ak");
console.log(myArr2);

// array methods
myArr.push("ak");//adds at the end
console.log(myArr);

myArr.pop(); //removes the last element
console.log(myArr);

myArr.unshift(-1); //adds at the beginning
console.log(myArr);

myArr.shift();
console.log(myArr); //removes from the beginning

console.log(myArr.includes(7));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(newArr); //returns "1,2,3,4,5"

const a = [1,2,3,4,5,6,7];
console.log(a);

const b = a.slice(1,3); //gets the [1,3)
console.log(b)
console.log(a);


const c = a.splice(1,3); //removes the [1,3]
console.log(c)
console.log(a);