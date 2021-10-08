function deleteSpace(str) {
  const modifiedStr = str.slice(1, str.length - 1);

  return modifiedStr;
}

module.exports = deleteSpace;
