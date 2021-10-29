function deleteSpace(str) {
  const modifiedStr = str.slice(0, 1).toUpperCase() + str.slice(1);

  return modifiedStr;
}

module.exports = deleteSpace;
