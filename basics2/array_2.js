const marvel_heroes = ["thor" , "ironman" , "spiderman"]
const dc_heroes = ["superman" , " flash" , " batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const allmarvel_heroes = marvel_heroes.concat(dc_heroes)// merhge array properly 
// console.log(allmarvel_heroes);

// const allnewhero = [...marvel_heroes,...dc_heroes] // use this to join any array as compare to concat 
// console.log(allnewhero);



// console.log(Array.isArray("ketan"));
// console.log(Array.from("ketan"));
// console.log(Array.from({name:"ketan"})); // this will give empty array 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
