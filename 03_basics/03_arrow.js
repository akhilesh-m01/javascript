// will understand the this keyword 

const user = {
    username:"akhilesh",
    age:12,
    greet:function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
    }
}

// user.greet();
// console.log(this); //empty object whereas in browser this is the window object


// this in function behaves differently

function zoneOut(){
    let username = "akhilesh"
    console.log(this.username); //here this.username gives undefined which is different to what we have seen in objects
}

zoneOut();

// arrow functions

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(2,3));

const getU = (num1,num2) => ({username:"akhilesh"}) //object has to be wrapped with braces
console.log(getU());