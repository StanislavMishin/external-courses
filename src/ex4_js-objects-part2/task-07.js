function funcEtc(str, num) {
  let newStr;

  if (str.length > num) {
    newStr = `${str.slice(0, num - 1)}…`;
  }

  return newStr;
}

module.exports = funcEtc;
