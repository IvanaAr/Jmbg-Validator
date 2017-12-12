var jmbgbroj = document.getElementById('jmbgunos');
var porukazaispravnost = document.getElementById("porukazaispravnost");
var datumrodjenja = document.getElementById("datumrodjenja");
var regijarodjenja = document.getElementById("regijarodjenja");
var pol = document.getElementById("pol");

function Provera() {
    var jmbg = jmbgbroj.value;
    if (jmbg.length != 13) {
        porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana.";
    }
    return;

    var DR = jmbgbroj[0] + jmbgbroj[1];
    var MR = jmbgbroj[2] + jmbgbroj[3];
    var GR = jmbgbroj[4] + jmbgbroj[5] + jmbgbroj[6];
    var RR = jmbgbroj[7] + jmbgbroj[8];
    var POL = jmbgbroj[9] + jmbgbroj[10] + jmbgbroj[11];
    var K = jmbgbroj[12];

    if (number(DR) < 1) { porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana." };
    return;

if (number(DR) > 31) { porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana." };
return;

if (number(MR) < 1) { porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana." };
return;
if (number(MR) > 12) { porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana." };
return;

if (number(RR) < 70) { porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana." };
return;

if (number(RR) > 50) { porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana." };
return;

datumrodjenja.innerHTML = "Datum rođenja: " + DR + "." + MR + "." + "1" + GR + ".";
regijarodjenja.innerHTML = "Regija rođenja: " + regija;
if (Number(POL) < 500) {
    pol.innerHTML = "Pol: Muški";
}
pol.innerHTML = "Pol: Ženski";




var N1 = Number(jmbg[0]);
var N2 = Number(jmbg[1]);
var N3 = Number(jmbg[2]);
var N4 = Number(jmbg[3]);
var N5 = Number(jmbg[4]);
var N6 = Number(jmbg[5]);
var N7 = Number(jmbg[6]);
var N8 = Number(jmbg[7]);
var N9 = Number(jmbg[8]);
var N10 = Number(jmbg[9]);
var N11 = Number(jmbg[10]);
var N12 = Number(jmbg[11]);
var N13 = Number(jmbg[12]);

var sum = 7 * (N1 + N7) + 6 * (N2 + N8) + 5 * (N3 + N9) + 4 * (N4 + N10) + 3 * (N5 + N11) + 2 * (N6 + N12);
var L = S % 11;
var M = 11 - L;
var K;

if (M < 10) {
    K = M;
}
else { K = 0 }

if (N13 != K) { porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana." };
return;

porukazaispravnost.innerHTML = "Uneti brojevi ne cine Jedinstveni maticni broj gradjana."
;
}
