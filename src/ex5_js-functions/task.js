function calc() {
  let result = 0;

  const objCalc = {
    add(x) {
      if (!isNaN(x)) {
        result += x;
      }

      return objCalc.add;
    },
    subtract(x) {
      if (!isNaN(x)) {
        result -= x;
      }

      return objCalc.subtract;
    },
    divide(x) {
      if ((!isNaN(x)) && (x !== 0)) {
        result /= x;
      }

      return objCalc.divide;
    },
    multiply(x) {
      if (!isNaN(x)) {
        result *= x;
      }

      return objCalc.multiply;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;

      return result;
    },
  };

  return objCalc;
}

const calcule = calc();

module.exports = calcule;
