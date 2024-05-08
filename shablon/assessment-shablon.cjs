function shablon(i, t = [], e = [], lang = "QQ") {
  let var_text = "variant";
  if (lang === "RUS") var_text = "вариант";

  return `
\\textbf{${i + 1}-${var_text}}\\\\

\\bgroup
\\def\\arraystretch{1.6} % 1 is the default, change whatever you need

\\begin{tabular}{|m{5.7cm}|m{9.5cm}|}
\\hline
Familiyası hám atı & \\\\
\\hline
Fakulteti  & \\\\
\\hline
Toparı hám tálim baǵdarı  & \\\\
\\hline
\\end{tabular}

\\vspace{0.7cm}

\\begin{tabular}{|m{0.7cm}|m{10cm}|m{4cm}|}
\\hline
№ & Soraw & Juwap \\\\
\\hline
1. & ${t[0]} &  \\\\
\\hline
2. & ${t[1]} &  \\\\
\\hline
3. & ${t[2]} &  \\\\
\\hline
4. & ${t[3]} &  \\\\
\\hline
5. & ${e[0]} &  \\\\
\\hline
6. & ${e[1]} &  \\\\
\\hline
7. & ${e[2]} &  \\\\
\\hline
8. & ${e[3]} &  \\\\
\\hline
9. & ${e[4]} &  \\\\
\\hline
10. & ${e[5]} & \\\\
\\hline
\\end{tabular}

\\vspace{0.7cm}

\\begin{tabular}{lll}
Tuwrı juwaplar sanı: \\underline{\\hspace{1cm}} & 
Bahası: \\underline{\\hspace{1cm}} & 
Imtixan alıwshınıń qolı: \\underline{\\hspace{2cm}} \\\\
\\end{tabular}

\\egroup

\\newpage

`;
}

module.exports = { shablon };
