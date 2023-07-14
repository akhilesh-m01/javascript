const btns = document.querySelectorAll('.button');

btns.forEach( (btn)=>{
    btn.addEventListener('click',(e)=>{
        const bdy = document.querySelector('body');
        bdy.style.backgroundColor = e.target.id;
        btn.style.border = "3px solid black";
        bdy.style.transition = "background-color 0.5s ease-in";
    })
} );