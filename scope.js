// let a = 10
// const b = 20 
// var c = 30 
// console.log(a)
// console.log(b)
// console.log(c)


// {}  this curly braces are the scope of that program 

if(true) {
    let a = 10
const b = 20 
var c = 30 
}
// console.log(a)
// console.log(b)
// console.log(c)  // only var can be accesible outside the loop 
//  thats why dont use var other will work iside the if 

// note 

// when we check scope in normal browser and we check in our terminal with node they both are different global scope 


// Nested function  
function one (){
   const username  = "ketan"
   
    function two(){
        const website = "youtube"
        console.log(website);
        }
        console.log(username);
        two()
        
}
// one()

//  if else

if (true) {
    const username = "ketan"
    if (username === "ketan") {
        const website = "youtube"
        // console.log(username +' '+ website);
        // console.log(website); 
    }
    // console.log(username);
}


// -----------INTRESTING------------------ //
console.log( addone(5));  // we can declare before the function without using the variable 

function addone(num){
  return num+1
}


// by using variable 
const addtwo = function(num){
    return num +2
}
console.log(addtwo(5));
  // we can decalre before the function when we are declaring a function with an variable 
