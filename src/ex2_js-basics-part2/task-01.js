const value = 25;

function typeData(val) {
  if (typeof val === 'number') {
    console.log('number');
    return 'number';
  } if (typeof val === 'string') {
    console.log('string');
    return 'string';
  } if (isNaN(val) || (typeof val !== 'number' && typeof val !== 'string')) {
    console.log('undefined');
    return undefined;
  }
  return '';
}

typeData(value);

module.exports = typeData;
