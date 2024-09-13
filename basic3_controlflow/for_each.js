const coding = ["java", "python","javascript","ruby","cpp"]

coding.forEach(function (val) {
    // console.log(val);
})

//  for each callback function 
coding.forEach( (item) => {
// console.log(item);
})


//  for each with function 
function print (item){
    // console.log(item);
}
coding.forEach(print)


coding.forEach((item,index,arr)=> {
    // console.log(item,index,arr);
})

const mycoding = [
    {
     languageName :"javascript",
     languagefilename : "js",
    },
    {
        languageName :"python",
        languagefilename : "py",
       },
       {
        languageName :"java",
        languagefilename : "java",
       }
]
mycoding.forEach((item) =>{
    console.log(item.languageName);
    
})