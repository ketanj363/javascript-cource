function addlanguage(langName){
 const li = document.createElement('li');
 li.innerHTML = `${langName}`
 document.querySelector('.language').appendChild(li)
}
addlanguage("python")
addlanguage("java")


//  optimise method

function addoptilanguage (langName){
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(langName))
  document.querySelector('.language').appendChild(li)
}
addoptilanguage("ruby");


// edit or replace 
const seconlang=  document.querySelector("li:nth-child(2)")
// seconlang.innerHTML = "Mojo"
// optimise way

 const newli =  document.createElement("li")
 newli.textContent = "Mojo"
 seconlang.replaceWith(newli)

//   edit 
const firstlang = document.querySelector("li:first-child")

firstlang.outerHTML = '<li>Typescirpt</li>'

//  remove 
const lastlang =document.querySelector('li:last-child')
lastlang.remove()