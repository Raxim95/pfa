const fs = require("fs");
const _ = require("lodash");

const { PFSHAA } = require("../pfsha.js");

const { texShablon } = require("../shablon/tex-shablon.cjs");
const { shablon11 } = require("../shablon/11-sorawliq.cjs");

const LANG = "RUS";

let T = fs
  .readFileSync(__dirname + `/../angeom material/${LANG}/T.md`, "utf8")
  .replaceAll("\r\n", "\n");
let A = fs
  .readFileSync(__dirname + `/../angeom material/${LANG}/A.md`, "utf8")
  .replaceAll("\r\n", "\n");

let B = fs
  .readFileSync(__dirname + `/../angeom material/${LANG}/B.md`, "utf8")
  .replaceAll("\r\n", "\n");

let C = fs
  .readFileSync(__dirname + `/../angeom material/${LANG}/C.md`, "utf8")
  .replaceAll("\r\n", "\n");

// ------------------------------------------------
// t-teoriya, e-esap
// t = [[t1, t2], [t1, t2]] kóriniske keltiremiz
T = _.compact(T.split("\n\n"));
A = _.compact(A.split("\n\n"));
B = _.compact(B.split("\n\n"));
C = _.compact(C.split("\n\n"));
[T, A, B, C].forEach((m) => {
  // m - massiv
  for (let i = 0; i < m.length; i++) {
    m[i] = _.compact(m[i].split("\n"));
  }
});

// ------------------------------------------------
T = new PFSHAA(T, 2);
A = new PFSHAA(A, 3);
B = new PFSHAA(B, 3);
C = new PFSHAA(C, 3);
// ------------------------------------------------
let variant = "";
let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
  // t - teoriyalar
  let t = T.next();
  // A - A tip (ańsat), B - B tip (ortasha), C - C tip (qıyın)
  let a = A.next();
  let b = B.next();
  let c = C.next();
  variant += shablon11(i, t, a, b, c, LANG);
}
// ------------------------------------------------
fs.writeFileSync(__dirname + `/angeom.JB-11-${LANG}.tex`, texShablon(variant));
