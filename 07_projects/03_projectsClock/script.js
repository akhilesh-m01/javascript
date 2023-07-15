const clock = document.querySelector('#clock');

setInterval( function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML= date.toLocaleTimeString();

    // checking the time at particular instance
    if(date.toLocaleTimeString().toString() == '10:28:40 AM'){
        document.querySelector('body').style.backgroundColor = "white";
    }
},1000 );


// setInterval() - this function that runs at every specified interval
// dont forget ; after the setInterval() statement


