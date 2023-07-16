const prevArr = [];
let chances = 10;

const form = document.querySelector('form');

const r = Math.round(Math.random()*10+1);
console.log(r);

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const currVal = document.querySelector('input[type="text"]').value;
    prevArr.push(currVal);
    chances=chances-1;

    const h4 = document.querySelector('h4');
    h4.innerHTML = `${chances}`;

    
    const h3 = document.querySelector('h3');
    h3.innerHTML = `${prevArr}`;

    if(r==currVal){
        document.querySelector('h2').innerHTML = "correct";
        const newg = document.createElement('button');
        newg.innerHTML="Start new game";
        document.querySelector('#number').setAttribute("disable","");
        console.log("disabled");
        h3.appendChild(newg);

        newg.addEventListener('click',()=>{
            while(prevArr){
                prevArr.pop();
                h3.innerHTML = `${prevArr}`;
            }
            chances = 10;
            h4.innerHTML = `${chances}`;
        });
    }
    else if(r<currVal){
        document.querySelector('h2').innerHTML = ">";
    }
    else{
        document.querySelector('h2').innerHTML = "<";
    }
})