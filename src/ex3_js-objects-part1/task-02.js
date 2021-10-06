function getKeyAndValue(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i += 1) {
    console.log(keys[i], values[i]);
  }

  return '';
}

module.exports = getKeyAndValue;
