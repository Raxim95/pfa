function testShablon(i, t1, t2, e1, e2, e3) {
  return `
\\begin{tabular}{m{17cm}}
\\textbf{${i + 1}-variant}\\\\
1. ${t1}\\\\

2. ${t2}\\\\

3. ${e1}\\\\

4. ${e2}\\\\

5. ${e3}
\\end{tabular}
\\vspace{1cm}

`;
}

module.exports = { testShablon };
