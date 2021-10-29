const value = 25;

function typeData(val) {
  if (typeof val === 'number') {
    console.log('number');
    return 'number';
  } if (typeof val === 'string') {
    console.log('string');
    return 'string';
  } if (isNaN(val)) {
    console.log('undefined');
    return undefined;
  }
  return undefined;
}

typeData(value);

module.exports = typeData;
