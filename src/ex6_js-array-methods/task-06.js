function reduce(array, callback, initialValue) {
  let previousValue = initialValue || array[0];
  let i = (previousValue === initialValue) ? 0 : 1;

  for (i; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = reduce;
