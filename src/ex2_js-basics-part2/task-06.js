const number = 0;

function justNumber(num) {
  if (num > 1000) {
    console.log('Данные неверны');
    return 'Данные неверны';
  }
  if (num === 1 || num === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  let checkbox = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      checkbox = false;
      break;
    }
  }
  const result = (checkbox) ? `Число ${num} - простое число` : `Число ${num} - составное число`;
  return result;
}

justNumber(number);

module.exports = justNumber;
