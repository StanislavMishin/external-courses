function search(a, obj) {
  return obj.__proto__[a];
}

module.exports = search;
