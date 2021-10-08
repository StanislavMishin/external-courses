function search(str) {
  let newStr = str.split(' ');

  for (let i = 0; i < newStr.length; i += 1) {
    newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1);
  }
  newStr = newStr.join(' ');

  return newStr;
}

module.exports = search;
