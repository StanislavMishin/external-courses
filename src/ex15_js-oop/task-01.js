function Candy(nameCandy, baseCandy, weigthCandy, priceCandy) {
  this.nameCandy = nameCandy;
  this.baseCandy = baseCandy;
  this.weigthCandy = weigthCandy;
  this.priceCandy = priceCandy;
}

function SweetKit(...candyList) {
  this.candyList = candyList;
}

SweetKit.prototype.getWeigthSweetKit = function getWeigthSweetKit() {
  return this.candyList.reduce((accum, objCandy) => accum + objCandy.weigthCandy, 0);
};

SweetKit.prototype.getSortCandyPrice = function getSortCandyBase() {
  return this.candyList.sort((current, next) => (current.priceCandy < next.priceCandy ? -1 : 1));
};

SweetKit.prototype.findCandyByName = function findCandyByName(findName) {
  return this.candyList.find((currentElem) => currentElem.nameCandy === findName);
};

const raspberry = new Candy('raspberry', 'jelly', 20, 180);
const sweetCow = new Candy('sweetCow', 'dairy', 24, 230);
const redCap = new Candy('redCap', 'combined', 29, 210);

const sweetKit = new SweetKit(raspberry, sweetCow, redCap);
console.log(sweetKit.getWeigthSweetKit());
module.exports = sweetKit;
