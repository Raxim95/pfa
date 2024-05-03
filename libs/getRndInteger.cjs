function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRndIntegerNot0(min, max) {
  let rndInt = getRndInteger(min, max);
  while (rndInt === 0) {
    rndInt = getRndInteger(min, max);
  }
  return rndInt;
}

module.exports = {getRndInteger, getRndIntegerNot0}