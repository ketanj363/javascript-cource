let randomnumber= parseInt(Math.random()*100+1);


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.Guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
 
let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault()
     const guess = parseInt(userInput.value)
    //  console.log(guess);
     validateGuess(guess);
    })
}

function validateGuess(guess){
    //  this method will used in every game or project to valide
    if (isNaN(guess)) {
        alert('please enter a valid number') 
    }else if (guess<1) {
        alert("Please enter a number more than 1")
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over.Random number was ${randomnumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // 
    if (guess === randomnumber) {
        displayMessage('You guessed it right')
        endGame()
    }else if (guess < randomnumber) {
        displayMessage('Number is too low')
    }else if (guess > randomnumber) {
        displayMessage('Number is too High')
    }
}

function displayGuess(guess){
    //  clean up method
    userInput.value = ''
    guessSlot.innerHTML  += `${guess}, ` 
    numGuess++; 
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
    // 
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    // 
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    // 
    const newGamebutton = document.querySelector('#newGame')
    newGamebutton.addEventListener('click',function(e){
    randomnumber= parseInt(Math.random()*100+1);
    prevGuess =[]
    numGuess = 1
    guessSlot.innerHTML =''
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
    })  
}

