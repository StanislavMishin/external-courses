function Hangman(secretWord) {
  this.secretWord = secretWord;
  this.sliceSecretWord = [...this.secretWord];
  this.guessedLetters = new Array(this.secretWord.length).fill('_');
  this.errorCount = 6;
  this.wrongSymbols = [];

  this.guess = (letter) => {
    if (this.sliceSecretWord.includes(letter)) {
      this.sliceSecretWord.forEach((currentLetter, index) => {
        if (currentLetter === letter) this.guessedLetters[index] = letter;
      });
    } else {
      this.errorCount -= 1;
      if (this.errorCount === 0) {
        console.log('you lose:/');
      }
      this.wrongSymbols.push(letter);
      console.log(`wrong letter, errors left ${this.errorCount} | ${this.wrongSymbols}`);
    }

    if (!this.guessedLetters.includes('_')) {
      console.log(`${this.guessedLetters.join('')} | Yor won!`);
    } else console.log(this.guessedLetters.join(''));

    return this;
  };
  this.getGuessedString = () => console.log(this.guessedLetters.join(''));

  this.getErrorsLeft = () => console.log(this.errorCount);

  this.getWrongSymbols = () => this.wrongSymbols;

  this.getStatus = () => console.log(`${this.guessedLetters.join('')} | errors left ${this.errorCount}`);

  this.startAgain = (newWord) => {
    this.secretWord = newWord;
    this.sliceSecretWord = [...this.secretWord];
    this.guessedLetters = new Array(this.secretWord.length).fill('_');
    this.errorCount = 6;
    this.wrongSymbols = [];

    return this;
  };
}

module.exports = Hangman;
