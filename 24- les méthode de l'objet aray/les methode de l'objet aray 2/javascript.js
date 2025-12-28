let prenoms =["rachid", "mustapha", "sonia", "Antalas"],
    p = "";
    //supprimer un element a la fin dans array avec methode pop.

    let suppr = prenoms.pop();

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert(p+ "\n\nNous avons supprimé : " +suppr + "  du tableau");


