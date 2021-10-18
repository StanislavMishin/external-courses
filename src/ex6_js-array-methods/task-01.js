function slice(arr, begin, end) {
  const result = [];
  const from = Math.max(begin, 0);
  const to = Math.min(end);

  if ((!end) || (end > arr.length)) {
    for (let i = from; i < arr.length; i += 1) {
      result.push(arr[i]);
    }
  } else {
    for (let i = from; i < to; i += 1) {
      result.push(arr[i]);
    }
  }
  if ((!begin) && (!end)) {
    for (let i = 0; i < arr.length; i += 1) {
      result.push(arr[i]);
    }
  }
  if ((begin < 0) && (end < 0)) {
    for (let i = arr.length + begin; i < arr.length + to; i += 1) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = slice;
