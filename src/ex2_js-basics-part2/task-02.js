const array = [2, 7, 4, 1, 0, 3, 5];

function showArray(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
  console.log(`length = ${arr.length} elements`);
  return null;
}

showArray(array);

module.exports = showArray;
