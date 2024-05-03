const fs = require("fs");
const _ = require("lodash");

const { PFSHA } = require("./pfsha.js");
const { testShablon } = require("./test-shablon.js");

let t = fs
  .readFileSync("./siz.alg.dist.SHB sorawlar/qq-teoriya.tex", "utf8")
  .replaceAll("\r\n", "\n");
let e = fs
  .readFileSync("./siz.alg.dist.SHB sorawlar/qq-esap.tex", "utf8")
  .replaceAll("\r\n", "\n");

// ------------------------------------------------
// t-teoriya, e-esap
t = _.compact(t.split("\n"));
e = _.compact(e.split("\n\n"));

for (let i = 0; i < e.length; i++) {
  e[i] = _.compact(e[i].split("\n"));
}

// e.unshift(t);
// ------------------------------------------------
let teoriyaM = new PFSHA(t, 4);
let m5 = new PFSHA(e[0]);
let m6 = new PFSHA(e[1]);
let m7 = new PFSHA(e[2]);
let m8 = new PFSHA(e[3]);
let m9 = new PFSHA(e[4]);
let m10 = new PFSHA(e[5]);
// ------------------------------------------------
let test = `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{array}
\\usepackage[a4paper,
  left=15mm,
  top=15mm,]{geometry}
\\begin{document}

\\large
\\pagenumbering{gobble}

`;

let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
  let teoriya = teoriyaM.next();
  let [a5] = m5.next();
  let [a6] = m6.next();
  let [a7] = m7.next();
  let [a8] = m8.next();
  let [a9] = m9.next();
  let [a10] = m10.next();

  test += testShablon(i, teoriya, a5, a6, a7, a8, a9, a10);
}

test += "\\end{document}";
// ------------------------------------------------

// fs.writeFileSync("./esap.json", JSON.stringify(e));
fs.writeFileSync("./assessment.tex", test);
