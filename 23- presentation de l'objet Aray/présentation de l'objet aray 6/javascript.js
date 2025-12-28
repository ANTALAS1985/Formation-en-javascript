// creer u n tableau let monTableau avec l'objeet literal
// l'objet literal ce n'st pas un objet array
let prenoms = {
    prenom1: "Mustapha",
    prenom2: "Sonia",
    prenom3: "Rachid",
    prenom4: "Amine",
},
    p = "";
// parcourir l'objet literal avec une boucle for in
for(let clefs in prenoms){
    p+= clefs + " : " + prenoms[clefs] + "\n";
}

    alert (p);
