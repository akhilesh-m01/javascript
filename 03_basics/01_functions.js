
// fnctions in javascript

function greet(){
    console.log("Hello..!")
}

greet();

function greet1(user = "ak"){
    if(user === undefined){
        console.log("pass with the username");
        return
    }
    else{
        console.log(`hello, ${user}`);
        return;
    }
}
greet1();



function cartSum(val1,val2,...nums){
    console.log(nums);
}

cartSum(2,3,34,34,34,3,4,3);

// pass object as an array

const userObj = {
    username: "perfume",
    price: 500
}

function handleObject(anyObject){
    console.log(`product is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(userObj);
handleObject({
    username: "perfume",
    price: 500
})

// passing array

const myArr = [100,200,300];

function handleArray(getArray){
    console.log(getArray[1]);
}

// handleArray(myArr);
handleArray([100,200,300])


