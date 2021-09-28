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

function cloneObj(obj) {
  const clone = JSON.parse(JSON.stringify(obj));
  const keysClone = Object.keys(clone);

  for (let i = 0; i < keysClone.length; i += 1) {
    clone[keysClone[i]] = (typeof obj[keysClone[i]]) === 'object' ? cloneObj(clone[keysClone[i]]) : obj[keysClone[i]];
  }
  return clone;
}

cloneObj(student);

module.exports = cloneObj;
