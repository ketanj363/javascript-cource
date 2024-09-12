// different type of other loop 
// ["","",""] string into arrays 
// [{},{},{}] objects into arrays 

//  for off loop 
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting = "hello world"
for (const greet of greeting) {
    // console.log(greet);
}

//  MAP  is an object that holds key-pairs 
const map =new Map()
map.set('IN' , "India")
map.set('US' , "United States")
map.set('Eu' , "Europe")
// console.log(map);

// [] is used to destrunture the array 
for (const [key,value] of map) {
    // console.log(key,':-',value);
}


// we can't use for-off lopp for object 
// we have you for-in loop 

//  for in loop 
const myobject = {
    js: 'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key  in myobject) {
//    console.log(`${key} shortcut for ${myobject[key]} `);
}

//  we can use for in loop for array ni=ut it will retrun only index not the values

const lang = ["js","cpp","java","rb"]

for (const key in lang) {
// console.log(key);
}

