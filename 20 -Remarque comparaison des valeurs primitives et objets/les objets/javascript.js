//*creer un objet a partir d'un constructeur
function Identite(p, n, a) {
    this.prenom = p
    this.nom = n;
    this.age = a;
}

var mustapha = new Identite ("mustapha", "RAAB", 40);
var sonia = mustapha;

sonia.prenom = "dsf";

alert("prenom de mustapha : " + mustapha.prenom +
     "\nprnom de sonia :" + sonia.prenom
);