const student = {
  name: 'Stas',
  surname: 'Mishin',
  age: 25,
  access: true,
  size: {
    heigth: 172,
    weigth: {
      winter: '82kg',
      summer: '76kg',
    },
  },
};

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

cloneObj(student);

module.exports = cloneObj;
