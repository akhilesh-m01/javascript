const mynums = [1,2,3];

const mytotal = mynums.reduce( (acc,currentVal) => acc+currentVal,0  );
const mytotal2 = mynums.reduce( (acc,currentVal) =>{
        return acc+currentVal
    },0);

console.log(mytotal2);


const myCart = [{
    course:"python",
    price:2000
},
{
    course:"js",
    price:3000
},
{
    course:"ml",
    price:10000
}]

const totalCart = myCart.reduce( (acc,curr) => acc+curr.price,0 );
console.log(totalCart);