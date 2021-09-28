const student = {
  name: 'Stas',
  surname: 'Mishin',
  age: 25,
  access: true,
};

function copyObj(obj) {
  const newObj = Object.assign(...obj);
  return newObj;
}

copyObj(student);

module.exports = copyObj;
