const student = {
  name: 'Stas',
  surname: 'Mishin',
  age: 25,
  access: true,
};

function copyObj(obj) {
  return Object.assign(...obj);
}

copyObj(student);

module.exports = copyObj;
