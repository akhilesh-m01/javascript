const myobj1 = new Object(); //singleton object
console.log(myobj1);

const myobj2 = {}; //non singleton object
console.log(myobj2);

// create object inside ojects - nested

const myuser = {
    email:"ak@a.com",
    username:{
        fullname:{
            firstname: "akhilesh",
            lastname: "malish",
        }
    }
}

console.log(myuser.username.fullname.firstname);


// combining objects
const ob1 = { 1: "1",2: "2"};
const ob2 = { 4: "4",3: "3"};

// const ob3 = {ob1 , ob2}; //{ ob1: { '1': '1', '2': '2' }, ob2: { '3': '3', '4': '4' } }

// const ob3 = Object.assign({},ob1,ob2); //{ '1': '1', '2': '2', '3': '3', '4': '4' }

// spreading the object using spread operator (...)
const ob3 = {...ob1,...ob2}; //{ '1': '1', '2': '2', '3': '3', '4': '4' }

console.log(ob3);


// 
console.log(myuser);
console.log(Object.keys(myuser));
console.log(Object.values(myuser));
console.log(Object.entries(myuser));



// array of objects

const arob1 = [
    {
        name:"akhilesh",
        id:1
    },
    {
        name:"ak",
        id:12
    },
    {
        name:"akhil",
        id:3
    },
]

console.log(arob1);

// object destructuring
const myCompany = {
    name:"A",
    project: "problem",
    founder: "akhilesh",
}

const {project} = myCompany;
console.log(project);

const {founder:ceo}=myCompany;
console.log(ceo);

// api

// json format
// {
//     "name": "akhil",
//     "age": 12,
// }