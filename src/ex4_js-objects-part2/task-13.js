function getRandomNumber() {
  const min = 0;
  const max = 100;
  const result = Math.floor(Math.random() * (max - min)) + min;

  return result;
}

getRandomNumber(0, 100);

module.exports = getRandomNumber;
