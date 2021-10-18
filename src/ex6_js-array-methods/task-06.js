function reduce(array, callback, initialValue) {
  let previousValue;

  if (initialValue) {
    previousValue = initialValue;
    for (let i = 0; i < array.length; i += 1) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }
  if (!initialValue) {
    previousValue = array[0];
    for (let i = 1; i < array.length; i += 1) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }

  return previousValue;
}

module.exports = reduce;
