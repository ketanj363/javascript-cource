//  if 

// const isUserLoggedIn = true 
// const temperature = 41

// if (temperature == 50) {
//     console.log("less than 50");
// }else{
//     console.log("tempature is greter than 50 ");
// }
// console.log("execute");

// <, > , <= , >= , == , != , === , !==


// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`);  this line will give error 


//  const balance = 1000
// // if(balance >500) console.log("test");  // this is implesite scope 
// //  dont use this type of code not an good practice 

// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//    console.log("less than 1000");
// }else{
//    console.log("less than 1200");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedfromgoogle = false
const loggedfromemail = true

if (isUserLoggedIn && debitCard && 2==2) {
    console.log("aloow to buy course");
}

if(loggedfromemail || loggedfromgoogle){
    console.log("user logged in");
    
}







