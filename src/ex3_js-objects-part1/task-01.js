const student = {};

student.name = 'Stas';
student.surname = 'Mishin';
student.age = 25;
student.access = true;

delete student.surname;

module.exports = student;
