//*creer un objet a partir d'un constructeur
function Identite(p, n, a) {
    this.prenom = p;
    this.nom = n;
    this.age = a;
}

var mustapha = new Identite ("mustapha", "RAAB", 40);
var sonia = new Identite ("Sonia", "Aoudjehane", 38)

alert("age de mustapha :" + mustapha.age);
alert("age de sonia :" + sonia.age);