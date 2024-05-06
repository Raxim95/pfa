const _ = require("lodash");
const { SHANCWB, matshnc } = require("./shancwb.cjs");

// pull from shuffled array
function PFSHA(m = [], v = 1, shuffle = true) {
  const obj = {};
  // m - massiv
  // v - bir degende neshe soraw kerek
  if (shuffle) m = _.shuffle(m);
  let i = 0;

  obj.next = function (exception) {
    // exception - massiv, usı massivtegi elementlerden basqasın qaytarıw kerek
    let newM = _.difference(m, exception);

    let mi = [];

    i += v;
    if (i > newM.length) {
      mi = newM.slice(i - v);
      mi = mi.concat(newM.slice(0, i - newM.length));
      i -= newM.length;
    } else {
      mi = mi.concat(newM.slice(i - v, i));
    }

    return mi;
  };
  return obj;
}

// PFSHA advanced
function PFSHAA(m = [], v = 1) {
  const obj = {};

  // mnc - massiv non consecutive, indekslerdi ózinde saqlaydı, "indexes"ti qaytaradı
  let mnc = new PFSHA(SHANCWB(matshnc(m)), v, false);

  let newM = m.map((massiv) => new PFSHA(massiv));

  obj.next = function () {
    let a = [];
    let indexes = mnc.next();

    for (let i = 0; i < indexes.length; i++) {
      a.push(newM[indexes[i]].next());
    }

    return a;
  };

  return obj;
}

module.exports = { PFSHA, PFSHAA };
