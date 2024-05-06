function texShablon(tex = "") {
  return `\\documentclass{article}
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

${tex}

\\end{document}
`;
}

module.exports = { texShablon };
