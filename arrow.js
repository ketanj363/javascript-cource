// function chai(){
//     let username = "ketan"
//     console.log(this);
//     console.log(this.username);
    
// }
// // we cant use this in an function only in object we can use 
// chai()

// const chai= function(){
//   let username = "ketan"
//   console.log(this.username);
  
// }

// arrow function 
//  syntax  () =>{}

    // 1st way 
    // const addtwo = (num1,num2) => {
    //     return num1 +num2
    // }
    

    // 2nd way 
    //  when we use {} we have to write return keyword  this is explicite return
    //  when we use ()  we have dont have to write return   this is implicite return


    // const addtwo = (num1,num2) => num1+num2  


    // const addtwo = (num1,num2) => (num1+num2)

    //  when we have to return object 
    
    const addtwo = (num1,num2) => ({username:"ketan"})
        console.log(addtwo(4,5));

