console.log('yo');

/*----- constants -----*/
// button elements
const btnEl = document.querySelectorAll('button');

const lettersEl = document.querySelector('.letters');
const wordEl = document.querySelector('.answer');
const wrongEl = document.querySelector('#wrong');

// input element
const inputEl = document.querySelector('input');

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

/*----- cached element references -----*/

/*----- functions -----*/
//
// function wordGuessed(event) {
// 	// only clicks letters
// 	if (event.target.value) {
// 		console.log(event.target.value);
// 		let letter = event.target.value;
// 		rightWord(letter);
// 	}
// }

// function rightWord(letter) {
// 	rightLetters.push(letter);
// 	console.log(rightLetters);
// 	wordEl.innerText = rightLetters.join('');
// }

function wrongGuess(event) {
	if (event.target.value) {
		console.log(event.target.value);
		let letter = event.target.value;
		wrongWord(letter);
	}
}
function wrongWord(letter) {
	wrongLetters.push(letter);
	console.log(wrongLetters);
	wrongEl.innerText = wrongLetters.join('');
}

/*----- event listeners -----*/

// lettersEl.addEventListener('click', wordGuessed);
lettersEl.addEventListener('click', wrongGuess);
