//  Dates 
//  let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toDateString()); 
//  console.log(myDate.toLocaleDateString()); // give only date

//  console.log(typeof myDate);

//  let myCreatedDate = new Date(2023,0,23)
//  console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString());

 let myTimeStamp = Date.now();
// console.log(myTimeStamp); // give milisecond value 

// console.log(Math.floor(Date.now() /1000)); // after / 1000 it will samll value


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
   weekday :"long", 
   
})



 