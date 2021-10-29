let array;

function maxNumber(arr) {
  let maxNum = null;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  console.log(maxNum);
  return maxNum;
}

maxNumber(array);

module.exports = maxNumber;
