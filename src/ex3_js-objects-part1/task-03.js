const student = {
  name: 'Stas',
  surname: 'Mishin',
  age: 25,
  access: true,
};
const string = 'email';

function showName(str, obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i] === str) return true;
  }
  return false;
}

showName(string, student);

module.exports = showName;
