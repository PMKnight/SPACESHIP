console.log('yo');

/*----- constants -----*/
// button elements
const btnEl = document.querySelectorAll('button');

const lettersEl = document.querySelector('.letters');
const wordEl = document.querySelector('.answer');
const wrongEl = document.querySelector('#wrong');

// input element
const inputEl = document.querySelector('input');
// image element
const imgEl = document.getElementById('img');

class Player {
	constructor(name, guesses, score, wins) {
		(this.name = name),
			(this.guesses = guesses),
			(this.score = score),
			(this.wins = wins);
	}
}
// // players
// const astroOne = new Player('Astronaunt 1', 9, score, wins);
// const astroTwo = new Player('Astronaunt 2', 9, score, wins);
/*----- app's state (variables) -----*/
let rightLetters = [];

let wrongLetters = [];

let wordBank = ['PYTHON'];

let correctWord = wordBank[0];
/*----- cached element references -----*/

/*----- functions -----*/
//
function wordGuessed(event) {
	// only clicks letters
	if (event.target.value) {
		console.log(event.target.value);
		let letter = event.target.value;
		if (correctWord.includes(letter)) {
			rightWord(letter);
		} else {
			wrongWord(letter);
		}
	}
}
function rightWord(letter) {
	let wordIndexes = [];
	for (let i = 0; i < correctWord.length; i++) {
		if (letter === correctWord[i]) {
			wordIndexes.push(i);
		}
	}

	for (let i = 0; i < wordIndexes.length; i++) {
		let newIndex = wordIndexes[i];
		rightLetters[newIndex] = letter;
	}
	console.log(rightLetters);
	wordEl.innerText = rightLetters.join('');
	// if correct
}

function wrongWord(letter) {
	wrongLetters.push(letter);
	console.log(wrongLetters);
	wrongEl.innerText = wrongLetters.join('');
}

/*----- event listeners -----*/

lettersEl.addEventListener('click', wordGuessed);
