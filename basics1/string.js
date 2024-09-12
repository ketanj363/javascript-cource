const name = "ketan"

const lastname ="jain"

// console.log(name + count + " values");


//  use this syntax to add string (bacticks ` `)

// console.log(`hello my first name is ${name} and my last name is ${lastname}`);


 const fullname = new String('ketan jain')
// console.log(fullname[1]);
// console.log(fullname.__proto__);

// console.log(fullname.length);
// console.log(fullname.toUpperCase()); 
// console.log(fullname.charAt(2));


// console.log(fullname.indexOf('t'));

// console.log(fullname.replace('t','k'));

// const newString = fullname.substring(0,3)
// console.log(newString);

// const anotherstring = fullname.slice(-6,6)
// console.log(anotherstring);

// const newStringone = "   ketan   "
// console.log(newStringone);
// console.log(newStringone.trim()); // trim only work on white space not in line spaces 

const url = "https://hitesh.com/hitesh%20jain"

 console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(fullname.split('-'));
