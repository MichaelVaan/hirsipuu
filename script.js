
const input = document.querySelector('input');
const output = document.querySelector('output');
const span = document.querySelector('span');

const words = [
    "programming", "javascript", "database", "markup", "framework", 
    "variable", "stylesheet", "library", "asynchronous", "hypertext"
];

let randomizedWord = '';
let maskedWord = '';
let guesses = 0;

const newGame = () => {
    const random = Math.floor(Math.random() * words.length);
    randomizedWord = words[random];
    maskedWord = "*".repeat(randomizedWord.length);
    console.log(randomizedWord);  // To help with testing
    output.innerHTML = maskedWord;
    span.textContent = guesses;
}

const replaceFoundChars = (guess) => {
    let newString = maskedWord.split('');
    for (let i = 0; i < randomizedWord.length; i++) {
        if (randomizedWord[i] === guess) {
            newString[i] = guess;
        }
    }
    maskedWord = newString.join('');
    output.innerHTML = maskedWord;
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const guess = input.value.toLowerCase();
        if (guess.length === 1) {
            replaceFoundChars(guess);
        } else if (guess === randomizedWord) {
            alert(`You have guessed right, the word is ${randomizedWord}. You needed ${guesses} guesses!`);
            newGame();
        }
        input.value = '';
        guesses++;
        span.textContent = guesses;
    }
});

newGame();
