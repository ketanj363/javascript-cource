function myname (){
    console.log("k");
    console.log("e");
    console.log("t");
    console.log("a");
    console.log("n");
}

// myname // this is reference 
// myname()  // execution  

// function addtwonumber(number1,number2){
//     console.log(number1+number2);
// }
// addtwonumber(3,4)

// where number 1,numeber are parameter 
//  3, 4 are argument it can be anything 

function addtwonumber(number1,number2){
  
// let result = number1+number2
// return result

//  2nd method 
 return number1 + number2
// we can add anything after return 
}
 const result =  addtwonumber(3,4)
//  console.log("Result:" , result);

function LoginUserMessage(username){
    if(username === undefined){   // === or ! are same means !username or username === undefined
    console.log("please enter a username");
    return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMessage("Ketan"))
// console.log(LoginUserMessage());  

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,450,2000));

const user = {
    username :"ketan",
    price :199,
}

function handleproject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleproject(user)





 
 


