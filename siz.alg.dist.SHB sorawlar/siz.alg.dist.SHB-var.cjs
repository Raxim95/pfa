const fs = require("fs");
const _ = require("lodash");

const { PFSHA, PFSHAA } = require("./pfsha.js");
const { testShablon } = require("./test-shablon.js");

let t = fs
  .readFileSync("./siz.alg.dist.SHB sorawlar/qq-teoriya.tex", "utf8")
  .replaceAll("\r\n", "\n");
let e = fs
  .readFileSync("./siz.alg.dist.SHB sorawlar/qq-esap.tex", "utf8")
  .replaceAll("\r\n", "\n");

// ------------------------------------------------
// t-teoriya, e-esap
// t = [[t1, t2], [t1, t2]] kóriniske keltiremiz
t = _.compact(t.split("\n\n"));
e = _.compact(e.split("\n\n"));

for (let i = 0; i < t.length; i++) {
  t[i] = _.compact(t[i].split("\n"));
}

for (let i = 0; i < e.length; i++) {
  e[i] = _.compact(e[i].split("\n"));
}

// e.unshift(t);
// ------------------------------------------------
let teoriyaM = new PFSHAA(t, 2);
let esapM = new PFSHAA(e, 3);
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
  // t - teoriyalar
  let [t1, t2] = teoriyaM.next();
  // e - esaplar
  let [e1, e2, e3] = esapM.next();

  test += testShablon(i, t1, t2, e1, e2, e3);
}

test += "\\end{document}";
// ------------------------------------------------

// fs.writeFileSync("./esap.json", JSON.stringify(e));
fs.writeFileSync("./siz.alg.SHB-var-QQ.tex", test);
