let prenoms =["rachid", "mustapha", "sonia", "antalas"],
    p = "";
    //ajouter des element a la fin dans array avec methode push.

    let taille = prenoms.push("amina", "karim");

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert("le tableau contient " + taille + " éléments : \n\n" + p);

