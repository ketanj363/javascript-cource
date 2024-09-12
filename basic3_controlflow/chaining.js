const mynum = [1,2,3,4,5,6,7,8,9,10]

// const newnum = mynum.map( (num) =>{return num+10} )


//  this is chaining 
const newnum = mynum
              .map((num) => num *10)
              .map((num) => num+1 )
              .filter((num) => num>=50)

// console.log(newnum);


//  ---------- array.reduce method ---------------- // 
const myNum = [1,2,3]

// acc = accumalator
// currval = current value 
const mytotal = myNum.reduce(function (acc,currval){
    // console.log(`acc:${acc} and currval : ${currval}`);
    
    return acc + currval
}, 0 // here we give acc starting value // 
)


//  by arrow functions 
const myTotal = myNum.reduce( (acc,currval) => (acc+currval)  , 0 )
console.log(mytotal);

const shoppingcart = [
    {
        itemname :"aloo",
        price: 65
    },
    {
        itemname :"bhindi",
        price: 89
    },
    {
        itemname :"gajar",
        price:99
    },
] 
const pricetopay =  shoppingcart.reduce((acc,item) =>acc+ item.price ,0)
console.log(pricetopay);
