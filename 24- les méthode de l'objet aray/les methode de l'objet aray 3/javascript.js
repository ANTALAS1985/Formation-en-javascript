let prenoms =["rachid", "mustapha", "sonia", "Antalas"],
    p = "";
    //ajouter des element au debut dans array avec methode unshift.

    let taille  = prenoms.unshift("karim", "amine");

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert("notre tableau contient " + taille + " prénoms: \n" + p);


