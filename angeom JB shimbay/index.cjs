const fs = require("fs");
const path = require("node:path");
const _ = require("lodash");

const { PFSHAA } = require("../pfsha.js");
const { shablon } = require("../shablon/jazba-5-sorawliq.cjs");
const { texShablon } = require("../shablon/tex-shablon.cjs");

const LANG = "UZB";

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
A = new PFSHAA(A, 1);
B = new PFSHAA(B, 1);
C = new PFSHAA(C, 1);
// ------------------------------------------------
let VARIANT_SANI = 100;

let variant = "";
for (let i = 0; i < VARIANT_SANI; i++) {
  let [t1, t2] = T.next();
  let [a] = A.next();
  let [b] = B.next();
  let [c] = C.next();
  variant += shablon(i, t1, t2, a, b, c);
}
// ------------------------------------------------
// fs.writeFileSync("./esap.json", JSON.stringify(e));
fs.writeFileSync(
  __dirname + `/angeom-shimbay-JB-var-${LANG}.tex`,
  texShablon(variant)
);
