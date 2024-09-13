const usermail = []
if (usermail) {
    console.log("get user mail");
}else{
    console.log("don't have user emmail");
}

/*
//  falsy values 

false , 0 , -0 , Big Int 0n , "" , null , undefined , NaN


//  truthy value 
  anything under string is truthy value 
"0" , true, "false" , " " , {} [] , function(){}  , 
*/


// 
//  Nullish coalescing operator (??) : null , undefined 
//  only for null and undefined 

let val1 ;
// val1 = 5 ?? 10  give 5 
// val1 = null ?? 10   gives 10 
// val1 = undefined ?? 15  // give 15

val1 = null ?? 10 ?? 27  // gives 10 or valyue after null or undefined 
// console.log(val1);




//  ternary operator 
//  syntax    ====  condition ? true : false 
const teaprice = 100 
teaprice <= 80 ? console.log("less than 80 ") : console.log("more than 80 ");



