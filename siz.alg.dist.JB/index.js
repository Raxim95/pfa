const fs = require("fs");
const path = require("node:path");
const _ = require("lodash");

const { PFSHAA } = require("../pfsha.js");
const { shablon } = require("../shablon/assessment-shablon.cjs");
const { texShablon } = require("../shablon/tex-shablon.cjs");

const LANG = "QQ";

let T = fs
  .readFileSync(__dirname + `/material/T.md`, "utf-8")
  .replaceAll("\r\n", "\n");
let E = fs
  .readFileSync(__dirname + `/material/E.md`, "utf-8")
  .replaceAll("\r\n", "\n");

// ------------------------------------------------
T = _.compact(T.split("\n\n"));
E = _.compact(E.split("\n\n"));
[T, E].forEach((m) => {
  // m - massiv
  for (let i = 0; i < m.length; i++) {
    m[i] = _.compact(m[i].split("\n"));
  }
});
// ------------------------------------------------
T = new PFSHAA(T, 4);
E = new PFSHAA(E, 6);
// ------------------------------------------------
let VARIANT_SANI = 100;

let variant = "";
for (let i = 0; i < VARIANT_SANI; i++) {
  let t = T.next();
  let e = E.next();
  variant += shablon(i, t, e);
}
// ------------------------------------------------
// fs.writeFileSync("./esap.json", JSON.stringify(e));
fs.writeFileSync(
  __dirname + `/SAHAG.JB-var.assessment.${LANG}.tex`,
  texShablon(variant)
);
