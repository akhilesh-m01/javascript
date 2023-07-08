let a=900;

if(true){
    let a=10;
    const b=20;
    var c=30;

    console.log("inner c :",c);
}

// console.log(a);
// console.log(b);
console.log(c);


// scope level and mini hoisting

// outer functions cannot access inner fucntion but inner can access outer
function one(){
    const user  = "Akhilesh";
    function two(){
        const website = "ak.com";
        console.log(`${user} --> ${website}`);
    }
    // console.log(`${website}`); //cannot be accessed as it is inner 
    two();
}

one();

my1()
function my1(){
    console.log("hello");
}

// my2()
const my2 = function(){
    console.log("cannot be accessed before the definiton");
}