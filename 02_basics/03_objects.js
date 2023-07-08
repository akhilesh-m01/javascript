// singleton
// object.create

const mySym = Symbol("mykey1");

// object literals
const myobj = {
    name: "Akhilesh",
    "full name": "Akhilesh Malish",
    [mySym] : "mykey",
    age: 12,
    location:"fairfax",
    email: "ak@akhil.com",
    mobile: 90000000000,
};

console.log(myobj.name);
console.log(myobj["name"]);
console.log(myobj["full name"]);
console.log(myobj[mySym]); //symbol accessing way


myobj.email = "akhilesh@ak.com";
// Object.freeze(myobj);
myobj.email = "akhil@akhileshmalish.com";
console.log(myobj);

myobj.greeting = function(){
    console.log("Namaste..!");
}
myobj.greeting2 = function(){
    console.log(`Namaste, ${this.name}`);
}

console.log(myobj.greeting);
console.log(myobj.greeting());
console.log(myobj.greeting2());

