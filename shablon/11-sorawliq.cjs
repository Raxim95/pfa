// t - teoriya, massiv
// A - A tip (ańsat), massiv
// B - B tip (ortasha), massiv
// C - C tip (qıyın), massiv

function shablon11(i, t, A, B, C) {
  return `
\\begin{tabular}{m{17cm}}
\\textbf{${i + 1}-variant}
\\newline

T1. ${t[0]}\\\\

T2. ${t[1]}\\\\

A1. ${A[0]}\\\\

A2. ${A[1]}\\\\

A3. ${A[2]}\\\\

B1. ${B[0]}\\\\

B2. ${B[1]}\\\\

B3. ${B[2]}\\\\

C1. ${C[0]}\\\\

C2. ${C[1]}\\\\

C3. ${C[2]}\\\\

\\end{tabular}
\\vspace{1cm}

`;
}

module.exports = { shablon11 };
