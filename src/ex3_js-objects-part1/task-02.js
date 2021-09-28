const student = {
  name: 'Stas',
  surname: 'Mishin',
  age: 25,
  access: true,
};

function getKeyAndValue(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(keys[i], values[i]);
  }
  return '';
}

getKeyAndValue(student);

module.exports = getKeyAndValue;
