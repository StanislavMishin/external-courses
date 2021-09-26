const array = [1, 1, 1, 1, 1];

function comparison(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}

comparison(array);
console.log(comparison(array));
module.exports = comparison;
