function counting(str) {
  const charArray = str.split('');
  const result = {};

  for (let i = 0; i < charArray.length; i += 1) {
    const charCount = result[charArray[i]];

    if (charCount === undefined) {
      result[charArray[i]] = 0;
    }
    result[charArray[i]] += 1;
  }

  const key = Object.keys(result);
  const value = Object.values(result);

  for (let j = 0; j < key.length; j += 1) {
    console.log(`${key[j]}:${value[j]}`);
  }
}

module.exports = counting;
