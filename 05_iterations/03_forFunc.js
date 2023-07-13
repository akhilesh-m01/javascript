
const langs = ["js","java","c++","python","ruby"];

// const lang = langs.forEach( (item)=>{
//     console.log(item);
// } );

// console.log(lang); //forEach does not return any value

const mylang0 = [];
langs.forEach( (i)=>{
        if(i[0]=='j'){
            mylang0.push(i);    
        }
} );

console.log(mylang0);


const mylang = langs.filter( (item) =>{
        return item[0]=='j';
})

console.log(mylang);


// array of objects

const movies = [
        {
                movieName :"se7en",
                genre: "triller",
                year: "1995"
        },
        {
                movieName: "Darling",
                genre: "romance",
                year:2010
        },
        {
                movieName: "sahoo",
                genre: "action",
                year: 2019
        },
        {
                movieName: "adipurush",
                genre: "mythology",
                year: 2023
        },
        {
                movieName: "oppenheimer",
                genre: "drama",
                year: 2023
        },
        {
                movieName: "prestige",
                genre: "drama",
                year: 2006
        }
]

const myfilter = movies.filter( (movie) => movie.genre == "drama" );

console.log(myfilter);

const latest = movies.filter( (mv)=> mv.year>2000 );

/*
const myfilters = movies.filter( (mv)=>{ 
//         return mv.year>2000 && mv.genre=="romance"
// } ); //use return incase of scope
*/


console.log(latest);
// comments test