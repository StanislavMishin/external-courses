const student = {
  name: 'Stas',
  surname: 'Mishin',
  age: 25,
  access: true,
};
const string = 'email';

function setNameObject(str, obj) {
  const newObj = { ...obj };
  if (!obj.hasOwnProperty(str)) {
    newObj[str] = 'new';
  }
  return newObj;
}

setNameObject(string, student);

module.exports = setNameObject;
