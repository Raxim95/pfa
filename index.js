const _ = require("lodash");

module.exports.Sh = function (m = [], v = 1) {
  const obj = {};
  // m - massiv
  // v - bir degende neshe soraw kerek
  m = _.shuffle(m);
  let i = 0;

  obj.next = function () {
    let mi = [];

    i += v;
    if (i > m.length) {
      mi = m.slice(i - v);
      mi = mi.concat(m.slice(0, i - m.length));
      i -= m.length;
    } else {
      mi = mi.concat(m.slice(i - v, i));
    }
    return mi;
  };
  return obj;
};
