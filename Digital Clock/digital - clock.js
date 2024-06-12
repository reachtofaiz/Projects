const clock = document.getElementById('clock');
// console.log(clock);


setInterval(function(){
    
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString('en-US', { hour12: true });
},1000)