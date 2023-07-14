


const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const h = parseInt(document.querySelector("#height").value);
    const w = parseInt(document.querySelector("#weight").value);
    console.log(h);
    console.log(w);
    const res = document.querySelector(".result");
    if(h === '' || h<0 || isNaN(h)){
        res.innerHTML = `plz enter valid height`;
    }
    else if(w ==='' || w<0 ||isNaN(w)){
        res.innerHTML = `plz enter valid weight`;
    }
    else{
        const calVal = (w/(h*h)*10000).toFixed(2);
        res.innerHTML = calVal;
    }
})