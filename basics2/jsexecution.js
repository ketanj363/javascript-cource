/*
Javascript execution context 
1 global execution context 
2 Function execution context 

// in mongo
Eval execution context

it run into two phases 
1 memory creation phases / creation phases 
2  execution phases 

*/

let val = 10 
let val2= 5
function addnum(num1,num2){
    let total = num1+num2
    return total 
}
let result1 = addnum(val1+val2)
let result2 = addnum(10,2)

/*
step 1 = global execution / global environment and allocate in this 

step 2 = creation phases/ memory phases = 
line1 = val1 = undefined 
line2 = val2 = undefined 
line3 - 6 = addnum = definatiom
line7 = result1 - undefined 
        result2 - undefined 
this will happen 


step 3 = execution phases 
val1 = 10 
val2 = 5
addnum = here one more execution environment will built  called new exection context 
here (newvariable + execution thread)
after deletion of new execution context 
result1 = 15

again new execution context will build same as first 
after return to global execution it will get delete 
result2 = 15

in new excution contect 
again we have to do memory phases and execution phases 

1 memory phases = val1 = undefined 
                  val2 = undefine 
                  total = undefined 
2 execution context =  num1 = 10 
                       num2 = 5     
                       total = 15   -- this will go to global execution 
                       
                     after that new execution weill get delete 


                     again it will go to ececution phase after deleting 
*/ 



//  call statck  principle =  lifo(last in first out)
