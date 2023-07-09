// immediately invoked function expression(iife)

function coffee(){
    console.log(`i want coffee`);
}

coffee();

(function coffee2(){
// named iife - function with name
    console.log(`i want coffee but with name..!`);
})();

(()=>{
    console.log(`coffee for?`);
})();


((name)=>{
    console.log(`coffee for ${name}`);
})("akhil");