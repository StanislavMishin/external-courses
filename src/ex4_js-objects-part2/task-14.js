function getRandomNumber(min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  const result = Math.floor(Math.random() * (maximum - minimum)) + minimum;

  return result;
}

getRandomNumber(0, 100);

module.exports = getRandomNumber;
