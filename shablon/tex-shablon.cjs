function texShablon(tex = "", preamble = "") {
  return `\\documentclass{article}
\\usepackage[fontsize=12pt]{fontsize}
\\usepackage[utf8]{inputenc}
\\usepackage[T2A]{fontenc}
\\usepackage{array}
\\usepackage[a4paper,
left=15mm,
top=15mm,]{geometry}
\\usepackage{amsmath}
\\usepackage{setspace}
${preamble}

\\renewcommand{\\baselinestretch}{1} 

\\begin{document}

\\pagenumbering{gobble}

${tex}

\\end{document}
`;
}

module.exports = { texShablon };
