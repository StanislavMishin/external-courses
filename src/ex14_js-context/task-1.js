const calculate = {
  result: 0,

  initialState(num) {
    if (Number.isFinite(num)) {
      this.result += num;
    }

    return this;
  },
  add(num) {
    if (Number.isFinite(num)) {
      this.result += num;
    }

    return this;
  },
  subtract(num) {
    if (Number.isFinite(num)) {
      this.result -= num;
    }

    return this;
  },
  divide(num) {
    if (Number.isFinite(num)) {
      this.result /= num;
    }

    return this;
  },
  multiply(num) {
    if (Number.isFinite(num)) {
      this.result *= num;
    }

    return this;
  },
  getResult() {
    return this.result;
  },
  reset() {
    this.result = 0;

    return this;
  },
  fetchData(callback) {
    setTimeout(() => callback(500), 1000);
  },
};

module.exports = calculate;
