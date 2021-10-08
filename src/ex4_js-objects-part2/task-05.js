function search(str1, str2) {
  if (str1.includes(str2)) {
    return true;
  }

  return false;
}

module.exports = search;
