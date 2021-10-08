function lowerCamelCase(str) {
  let newStr = str.split(' ');
  newStr[0] = newStr[0].toLowerCase();

  for (let i = 1; i < newStr.length; i += 1) {
    newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1).toLowerCase();
  }
  newStr = newStr.join('');

  return newStr;
}

module.exports = lowerCamelCase;
