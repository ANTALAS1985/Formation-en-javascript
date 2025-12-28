let prenoms =["rachid", "mustapha", "sonia", "Antalas"],
    p = "";
    //supprimer un element au début  dans array avec methode shift.

    let suppr = prenoms.shift();

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert(p + "\n\nNous avons supprimé : " +suppr + "  du tableau");


