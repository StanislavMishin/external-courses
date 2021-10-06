function showName(str, obj) {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i] === str) return true;
  }

  return false;
}

module.exports = showName;
