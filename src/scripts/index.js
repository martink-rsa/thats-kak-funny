import { Howl } from 'howler';
import { phrases } from './phrases';

// Elements
const playButton = document.getElementById('play-button');
const phraseDisplay = document.getElementById('phrase-display');

// Globals
let index = 0;

// Initialize
phraseDisplay.textContent = phrases[0];
const sound = new Howl({
  src: ['audio.mp3'],
  volume: 0.3,
});

// Get the button and play the click
playButton.onclick = function () {
  sound.play();
  changePhrase();
};

/**
 * We display a new phrase whenever the button is clicked
 */
function changePhrase() {
  const oldIndex = index;
  do {
    index = Math.floor(Math.random() * phrases.length);
  } while (oldIndex === index);
  phraseDisplay.innerText = phrases[index];
}
