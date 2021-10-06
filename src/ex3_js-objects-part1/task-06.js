function cloneObj(from) {
  const to = {};
  const keys = Object.keys(from);

  for (let i = 0; i < keys.length; i += 1) {
    const cloningField = from[keys[i]];

    if (Array.isArray(cloningField)) {
      const clonedArray = [cloningField.length];

      for (let j = 0; j < cloningField.length; j += 1) {
        clonedArray[j] = cloneObj(cloningField[j]);
      }
      to[keys[i]] = clonedArray;
    } else if (typeof cloningField === 'object') {
      to[keys[i]] = cloneObj(cloningField);
    } else {
      to[keys[i]] = from[keys[i]];
    }
  }

  return to;
}

module.exports = cloneObj;
