// parcourir un tableau et afficher ses valeurs.
let prenom = ["mustapha", "Rachid", "Sonia", "zahra"],
    p = "";

for (let i = 0; i < prenom.length; i++){
    p+= "prenom n° " + (i+1) + " : " + prenom[i] + "\n";
}
alert