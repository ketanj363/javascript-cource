const clock = document.getElementById('Clock')
//  we can also take queryselector in this 
//  document.querySelector('#Clock')

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)
