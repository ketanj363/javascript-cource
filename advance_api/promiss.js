const promise1 = new Promise(function(resolve,reject){
//     do an async task 
//  BD call,network call
setTimeout(function(){
   console.log("Async task is completed");
   resolve()
},1000)
})
 // .then is directly connect to resolve  
promise1.then(function(){
console.log("promise consumed");
});

//  both the thing in one part
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async part 2");
        resolve()
    },1000)

}).then(function(){
    console.log("aysnc 2 resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : 'ketan' , email:'ketan@gmail.com'})
    }, 1000);
})
    promise3.then(function(user){
        console.log(user);
 })

 const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        // let error = false;
        if (!error) {
          resolve({username: "ketan" , password: "1234"})   
        }else{
            reject("Error: something went wrong")
        }
    },1000)
 })

//   here we are doing chaining 

//  using .then().catch(),finally()
 promise4
 .then((user) =>{
console.log(user);
return user.username
 })
 .then((username) =>{
console.log(username);
 })
 .catch(function(error){
    console.log(error);
 }).finally(() =>{
    console.log("the promise is either resolve or reject");
 })


 
//   another way  usnng async await 
const promose5 =  new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true;
    if (!error) {
        resolve({username :"javascript" , password: ""})
    }else{
        reject("error : js went wrong")
    }
},1000)
})

async function cunsumePromise5(){
   try {
    const response = await promose5;
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
}
cunsumePromise5()

// ----------//
// async function getalluser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//     const data = await response.json()
//     console.log(data);

//     } catch (error) {
//         console.log("Error: " , error);
        
//     }
// }
// getalluser()


//  2nd away of above 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
return response.json()
})
.then((data) =>{
console.log(data);
})
.catch((error) => console.log(error));

    
    

