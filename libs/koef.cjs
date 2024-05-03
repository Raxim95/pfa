function k(K = 1, basi = false) {
  let r = "";
  if (K < 0) {
    K = -K;
    if (K !== 1) {
      r = "-" + K;
    }
    if (K === 1) {
      r = "-";
    }
  } else {
    if (basi) {
      if (K !== 1) {
        r = K + "";
      }
      if (K === 1) {
        r = "";
      }
    } else {
      if (K !== 1) {
        r = "+" + K;
      }
      if (K === 1) {
        r = "+";
      }
    }
  }
  return r;
}

module.exports = { k };
