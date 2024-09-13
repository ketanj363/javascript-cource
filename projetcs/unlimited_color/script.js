//  generate the random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
   color += hex[Math.floor(Math.random() *16)]
     }
     return color;
}
let intervalId;

const startchanging = function(){
if(!intervalId){
    intervalId = setInterval(changebgcolor,1000);
}

 function changebgcolor(){
    document.body.style.backgroundColor = randomColor();
 }};

const stopchanging = function(){
    clearInterval(intervalId);
    intervalId = null; //  this we use to clean up the memory
};

document.getElementById('start').addEventListener('click',startchanging);

document.getElementById('stop').addEventListener('click',stopchanging);

 