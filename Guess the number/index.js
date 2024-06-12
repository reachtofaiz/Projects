let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')
const input = document.querySelector('#input')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.remaining')
const lowOrhigh = document.querySelector('.display')
const startOver = document.querySelector('.resultpara')

const p = document.createElement('p')

let previousguess = []
let numguess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(input.value);
        console.log(guess);
        validation(guess)
    })
}

function validation(guess) {
    if (isNaN(guess)) {
        alert("Please Enter valid number")
    } else if (guess > 100) {
        alert("Enter less than 100")
    } else if (guess < 1) {
        alert("Enter more than one")
    } else {
        previousguess.push(guess);
        if (numguess === 11) {
            displayguess(guess)
            displaymessage(`Game Over ... random number is ${randomNumber}`);
            endGame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage("You Won")
        endGame()
    } else if (guess < randomNumber) {
        displaymessage("Your Guess is lower")
    } else if (guess > randomNumber) {
        displaymessage("Your Guess is higher")
    }
}

function displayguess(guess) {
    input.value = ''
    guessSlot.innerHTML += `${guess}, `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}

function displaymessage(message) {
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start new game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame() {
    const newGamebutton = document.querySelector('#newGame')
    newGamebutton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousguess = []
        numguess = 1;
        guessSlot.innerHTML = 'Your guess: ';
        remaining.innerHTML = `${11 - numguess}`;
        lowOrhigh.innerHTML = ''
        input.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    });

}
