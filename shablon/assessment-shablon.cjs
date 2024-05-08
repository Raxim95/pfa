// jm - juwabi menen
function shablon(i, t = [], e = [], lang = "QQ", jm = false) {
  let var_text = "variant";
  if (lang === "RUS") var_text = "вариант";

  let slar = []; // sorawlar
  let jlar = []; // juwaplar

  for (let i = 0; i < t.length; i++) {
    let [s, j] = t[i].split(",,");
    slar.push(s);
    jlar.push(j);
  }

  for (let i = 0; i < e.length; i++) {
    let [s, j] = e[i].split(",,");
    slar.push(s);
    jlar.push(j);
  }

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

\\vspace{1cm}

\\begin{tabular}{|m{0.7cm}|m{10cm}|m{4cm}|}
\\hline
№ & Soraw & Juwap \\\\
\\hline
1. & ${slar[0]} & ${jm ? jlar[0] : ""} \\\\
\\hline
2. & ${slar[1]} & ${jm ? jlar[1] : ""} \\\\
\\hline
3. & ${slar[2]} & ${jm ? jlar[2] : ""} \\\\
\\hline
4. & ${slar[3]} & ${jm ? jlar[3] : ""} \\\\
\\hline
5. & ${slar[4]} & ${jm ? jlar[4] : ""} \\\\
\\hline
6. & ${slar[5]} & ${jm ? jlar[5] : ""} \\\\
\\hline
7. & ${slar[6]} & ${jm ? jlar[6] : ""} \\\\
\\hline
8. & ${slar[7]} & ${jm ? jlar[7] : ""} \\\\
\\hline
9. & ${slar[8]} & ${jm ? jlar[8] : ""} \\\\
\\hline
10. & ${slar[9]} & ${jm ? jlar[9] : ""} \\\\
\\hline
\\end{tabular}

\\vspace{1cm}

\\begin{tabular}{lll}
Tuwrı juwaplar sanı: \\underline{\\hspace{1.5cm}} & 
Bahası: \\underline{\\hspace{1.5cm}} & 
Imtixan alıwshınıń qolı: \\underline{\\hspace{2cm}} \\\\
\\end{tabular}

\\egroup

\\newpage

`;
}

module.exports = { shablon };
