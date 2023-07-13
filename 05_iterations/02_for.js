// ["","",""]
// [{},{},{}]

// for-of
// for-in
// for-each

const arr = ["virat","dhoni","saurav"];


// for - of
for(const i of arr){
    console.log(i);
}

const greetings = "Namaste";

for(const j of greetings){
    console.log(j);
}


// maps
const map = new Map();

map.set("IN","India");
map.set("USA","United States Of India");
map.set("Fr","France");

console.log(map);

for(const [key,value] of map){
    console.log(key,'-->',value);
}

const myObj = {
    'sec1' : 'C',
    'sec2' : 'c++',
}
// objects cannot use for-of 
// for objects <-> for-in

for(const key in myObj){
    console.log(key,'-->',myObj[key]);
}


// for-each

const lang = ['c','cpp','js','python','golang'];

// lang.forEach( function (val) {
//     console.log(val);
// } )

// lang.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(val){
//     console.log(val);
// }
// lang.forEach(printMe)


lang.forEach( (val,index,lang) => {
    console.log(val,index,lang);
})


const fileExt = [
    {
        lang : "javascript",
        ext : "js" 
    },
    {
        lang : "c++",
        ext : 'cpp'
    },
    {
        lang : "python",
        ext : 'py'
    }
]

fileExt.forEach( (val)=>{
    console.log(val.lang,val.ext);
} )

// comments test