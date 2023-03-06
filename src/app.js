export default function feedback(guessInput, wordInput) {
  const guess = guessInput.toUpperCase();
  const word = wordInput.toUpperCase();
  const result = [];
  for (let i = 0; i < guess.length; i++) {
    let index = word.indexOf(guess[i]);
    if (index === -1) {
      result.push({ letter: guess[i], result: 'incorrect' });
    } else if (index === i) {
      result.push({ letter: guess[i], result: 'correct' });
    } else {
      result.push({ letter: guess[i], result: 'misplaced' });
    }
  }
  return result;
}