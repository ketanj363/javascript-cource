const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault();

 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#result')
//  isNaN is new form of declaration of height != NaN
 if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML = `Please give a valid height ${height}`;
 }
 if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`;
 }else { 
   const bmi =  (weight / ((height*height)/10000)).toFixed(2);
//    show the results 
results.innerHTML = `<span> ${bmi} </span>`;
   }
 
});
