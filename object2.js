// method to declare an objrct 
// const tinderUser = new Object()   //1 st way  it is an singleton object

const tinderUser  = {} // same   // not an singleton objext

tinderUser.id = "kj363"
tinderUser.name = "ketan"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// object into objects 
const regularUser = {
    email:"ketanj@gmail.com",
    fullname:{
        userfullname :{
            firstname :"ketan",
            lastname : "jain"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//  type of syntax we can use 
// const obj3 = {obj1 , obj2}

// const obj3 =  Object.assign({} ,obj1,obj2)

const obj3 = {...obj1 , ...obj2}

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "kj363@gmailcom",
    },
    {
        id: 1,
        email: "kj363@gmailcom",
    },
    {
        id: 1,
        email: "kj363@gmailcom",
    },
]

user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  // this will gaive array datatype 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // for checking the value


 
const course = {
    coursename :"js in hindi",
    price :"999",
    courseIntructor :"ketan"
}

const {courseIntructor : instructor} = course // this is object destructuring
console.log(instructor);

 