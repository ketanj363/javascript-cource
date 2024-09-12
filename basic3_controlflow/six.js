// const coding = ["java", "python","javascript","ruby","cpp"]

// const value = coding.forEach((item) =>{
//     console.log(value);
//     return item;
    
// })


//  filter 
const mynum = [1,2,3,4,5,6,7,8,9,10]

//  let newnums = mynum.filter( (num) =>{
//     return num>4
// })
//  console.log(newnums);

//  using for each 

const newnums = []
mynum.forEach((num)=>{
if (num>5) {
    newnums.push(num)
}
})
// console.log(newnums);


//  example to pracice filter 

const books = [
    {
        title :"Book One", genre:"Friction", publish:1981,edition:2004
    },
    {
        title :"Book two", genre:"History", publish:1901,edition:2008
    },
    {
        title :"Book three", genre:"Non-Friction", publish:1960,edition:1999
    },
    {
        title :"Book four", genre:"Friction", publish:1911,edition:1990
    },
    {
        title :"Book five", genre:"History", publish:1981,edition:2004
    },
    {
        title :"Book six", genre:"NO=on-Friction", publish:2000,edition:2010
    },
    {
        title :"Book seven", genre:"Friction", publish:1890,edition:1990
    },
]

let userbook= books.filter( (bk) => bk.genre==="Friction" )


 userbook = books.filter(  (bk) => bk.publish>=1990)
 userbook = books.filter( (bk) =>{ 
  return  bk.publish<=1990 && bk.genre==="History" })
console.log(userbook);


 