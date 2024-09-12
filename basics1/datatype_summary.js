//  primitive  datatypes 

//  7 types  -  string , boolean, number , null , undefined , Symbol, BigInt 

const score= 100 // number
const scorevalue = 100.3 

const isLoggedIn =   false // boolean
const outsideTemp = null // null

let usermail; // undefined 

const id = Symbol('123') // symbol

const anotherId = Symbol('123') 
console.log(id === anotherId);

const bigNumber = 673258n// bigInt n is used to represent bigInt

//  java scfipt is dynamic  types language 
//  java is static typed language


//  Reference type (non Primitive)

// Arrays , objects , functions 

const heroes = ["shaktiman" , "nagraaj ", "doga"]  // arrays 

//  anything under curly braces are objects 

// let obj = {
//     name : "ketan",
//     age : 21,
// }

//  functions
// const myFunction = function(){
//     console.log("hello world");
    
// }

//  if we give null as a datatype when we ask that which datatype it is it will give result as Object 
// console.log(typeof outsideTemp);


//  ***************************************

//  memory

//  Stack memory(Primitive) , Heap memory(Non primitive )

let myName = "ketan"

anotherName = "mangu"
console.log(myName);
console.log(anotherName);

let userOne = {
    email : "ketan@gmail.com",
    upi : "user@ibl"
}

let userTwo = userOne
userTwo.email = "mangu@gmail.com"

//  value will change for both becaues it will store in heap value
console.log(userOne.email);
console.log(userTwo.email);







