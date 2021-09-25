const array = [null, 1, 5, 3, 0, 22, undefined, 13, 85, 41, 9, 0];

function evenAndOdd(arr) {
  const evenArr = [];
  const oddArr = [];
  const nullArr = [];
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] != null && arr[i] !== undefined) {
      if (arr[i] === 0) {
        nullArr.push(arr[i]);
      } else if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
      } else {
        oddArr.push(arr[i]);
      }
    }
  }
  result = [evenArr.length, oddArr.length, nullArr.length];
  console.log(result);
  return result;
}

evenAndOdd(array);

module.exports = evenAndOdd;
