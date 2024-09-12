//  IIFE - immediately invoked function 

//  ()() this is iife 

 ( function chai(){

    //  names iifi
    console.log(`DBCONNECTED`);
    
 }) ();
//   use : in this case to end the case

 ( (name) => {
    //  unnamed iifi 
    console.log(`DB CONNECTED TWO ${name}`);
 }) ("ketan")

//   if you are  adding two iffe then use semicolu : after one 