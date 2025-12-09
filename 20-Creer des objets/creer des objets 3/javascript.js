//*creer un objet a partir d'un constructeur( a utiliser dans les grand projet)
function Identite(p, n, a, s){
    this.prenom = p;
    this.nom = n;
    this.age = a;
    this.sexe = s;
}
let moi = new Identite("Mustaha", "RAAB", 40, "masculin");
let sonia = new Identite("Sonia", "RAAB", 35, "feminin");

document.write(moi.prenom + " " + moi.nom + " a " + moi.age + " ans" + " et est de sexe " + moi.sexe + "<br>");
document.write(sonia.prenom + " " + sonia.nom + " a " + sonia.age + " ans" + " et est de sexe " + sonia.sexe + "<br>");