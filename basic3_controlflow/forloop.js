//  for


//  syntax
//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     const element =i;
//     console.log(element);
// }

// //  nested loop 
for (let i = 0; i <=10; i++) {
    // console.log(`outer lopp ${i}`);
    
    for (let j = 0; j <=10; j++) {
        //console.log(`inner loop ${j} and inner lopp ${i}`);
        // console.log(i +'*' + j + '=' + i*j);   
    }
}

const myarray = ["ketan","aryan","kushi","adya"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element);
}


//  break 
for (let i = 0; i <=20; i++) {
    if (i==5) {
        // console.log("detected 5");
        break;
    }
    // console.log(`value of i is ${i}`);  
}

//  continue
for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);  
}

