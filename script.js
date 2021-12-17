console.log('yo');

/*----- constants -----*/
// button elements
const btnEl = document.querySelectorAll('button');

const lettersEl = document.querySelector('.letters');
const wordEl = document.querySelector('.answer');
const wrongEl = document.querySelector('#wrong');

/*----- app's state (variables) -----*/
let counter = 0;
let rightLetters = [];

let wrongLetters = [];

let wordBank = [
	'COSMOS',
	'GALAXY',
	'ORBIT',
	'ASTEROID',
	'MOON',
	'PLANET',
	'UFO',
	'STAR',
	'NEBULA',
	'COMET',
];

// get random word from array
let correctWord = wordBank[Math.floor(Math.random() * wordBank.length)];

/*----- cached element references -----*/

/*----- functions -----*/
//
function wordGuessed(event) {
	// only clicks letters
	if (event.target.value) {
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

	wordEl.innerText = rightLetters.join('');

	// if correct
	if (rightLetters.length === 1) {
		prompt('Astronaut, Start Your Engines! Wanna Play?');
	} else if (rightLetters.length === 2) {
		alert('Let the Countdown Begin');
	} else if (rightLetters.length === 3) {
		alert('LIFTOFF!!! BE One With The Stars!');
	}
}

function wrongWord(letter) {
	wrongLetters.push(letter);

	wrongEl.textContent = wrongLetters.join('');

	// image element

	function uncover() {
		let wrongletters = 0;

		let imgEl = document.querySelector('.ship');
		imgEl.setAttribute('src', `./Assets/spaceship${counter}.png`);
		counter++;

		if (wrongLetters.length === 9) {
			alert('No more Guesses. You Lose');
		}
	}
	uncover();
}

/*----- event listeners -----*/

lettersEl.addEventListener('click', wordGuessed);
