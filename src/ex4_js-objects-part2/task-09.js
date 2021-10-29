function insert(str1, str2, index) {
  const arr = str1.split(' ');

  return `${arr.slice(0, index)} ${arr.splice(index, 1)} ${str2} ${arr.slice(index)}`;
}

module.exports = insert;
