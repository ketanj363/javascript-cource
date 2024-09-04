// singleton

//  object literals
const mySym = Symbol("key1")

const jsuser = {
    name :"ketan",
    [mySym] :"mykey1",
    age :21,
    location:"bangalore",
    email:"ketanj363@gmail.com",
    isloggedIn :false,
    lastloginday :["monday" , "saturday"]
}
// console.log(jsuser.email); // 1st way 
// console.log(jsuser["email"]); // 2nd way

// console.log(jsuser[mySym]);
// console.log(typeof jsuser[mySym]);


// how to override the value or chnage the values

// jsuser.email = "mangukj363@gmail.com"
// Object.freeze(jsuser) // it will fress the change it will not alllow to change the value
// jsuser.email = "chamghuj363@gmail.com"
// console.log(jsuser);

jsuser.greeting = function(){
  console.log("hello everyone");    
}

jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);    
  }

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());




