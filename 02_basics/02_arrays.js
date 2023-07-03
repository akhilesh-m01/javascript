const IND = ["virat","gill","pant"];

console.log(IND);

const AUS = ["warner","lyon","smith"]
console.log(AUS);

// AUS.push(IND);
// console.log(AUS); //[ 'warner', 'lyon', 'smith', [ 'virat', 'gill', 'pant' ] ]

// const AI = AUS.concat(IND);
// console.log(AI); //[ 'warner', 'lyon', 'smith', 'virat', 'gill', 'pant' ]

const new_ai = [...AUS,...IND];
console.log(new_ai);


const img_arr = [1,2,3,[4,5,6],[7,[8,[9,10,11]]]];
const real_arr = img_arr.flat(Infinity)
console.log(real_arr);

console.log(Array.isArray("akhilesh"));
console.log(Array.from("akhilesh")); //converts to array

console.log(Array.from({name:"akhilesh"}));

const s1 = 100;
const s2 = 200;
const s3 = 300;
console.log(Array.of(s1,s2,s3));
