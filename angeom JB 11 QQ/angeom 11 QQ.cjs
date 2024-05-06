const fs = require("fs");
const _ = require("lodash");

const { PFSHA, PFSHAA } = require("../pfsha.js");
const { testShablon } = require("./test-shablon.js");

let T = fs
  .readFileSync("./angeom JB 11 QQ/T.tex", "utf8")
  .replaceAll("\r\n", "\n");
let A = fs
  .readFileSync("./angeom JB 11 QQ/A.md", "utf8")
  .replaceAll("\r\n", "\n");

let B = fs
  .readFileSync("./angeom JB 11 QQ/B.md", "utf8")
  .replaceAll("\r\n", "\n");

let C = fs
  .readFileSync("./angeom JB 11 QQ/C.md", "utf8")
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
let test = `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{array}
\\usepackage[a4paper,
  left=15mm,
  top=15mm,]{geometry}
\\usepackage{setspace}

\\renewcommand{\\baselinestretch}{1.1} 


  
\\begin{document}

\\large
\\pagenumbering{gobble}

`;

let VARIANT_SANI = 100;

for (let i = 0; i < VARIANT_SANI; i++) {
  // t - teoriyalar
  let t = T.next();
  // A - A tip (ańsat), B - B tip (ortasha), C - C tip (qıyın)
  let a = A.next();
  let b = B.next();
  let c = C.next();
  test += testShablon(i, t, a, b, c);
}

test += "\\end{document}";
// ------------------------------------------------

// fs.writeFileSync("./esap.json", JSON.stringify(e));
fs.writeFileSync("./angeom JB 11 QQ/angeom.JB-var.11-sorawliq.QQ.tex", test);
