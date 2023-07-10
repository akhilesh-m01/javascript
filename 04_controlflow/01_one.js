// if - else

// < , > , <= , >= , == , != , === ,!==

//  == makes comparsion possible by type coercion
// === it does strict equality comparsion and does not perform type coercion
 if( 2 == '2'){
    console.log("true");
 }

 if(2 === '2'){
   console.log("true");
 }
 else{
   console.log("strict check so....:)");
 }

 if(true){
   console.log("first");
 }
 else if(true){
   console.log("two");
 }
 else{
   console.log("three");
 }

//  switch

switch(3){
   case 1:console.log("jan");
         break;
   case 2:console.log("feb");
   break;
   case 3:console.log("march");
   break;
   default: console.log("default"); //when input does not match any case 
   break;
}




// falsy values

// 0,-0,"",undefined, null, NaN, false, BigInt(start with 0n)

// truth values

// "0"," ",[],'false', {}, function(){}

// nullish coalescing character ??

// let val1 = 5 ?? 10
// let val1 = null ?? 10
// let val1 = undefined ?? 15
let val1 = null ?? undefined ?? 20

console.log(val1);


// ternary operator
// condition ? true : false

let isLoggedIn = false;
isLoggedIn === true ? console.log("welcome to my website") : console.log("plz login..!");;











