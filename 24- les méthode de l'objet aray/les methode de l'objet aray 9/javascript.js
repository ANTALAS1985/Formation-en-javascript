//classer et anverser les valeurs sous ordre aphabetique
let prenoms =["Rachid", "rachid", "Sonia", "sonia"],
    p = "";
   
    let chaine = prenoms.join("/")

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert("notre tableau\n" + p +
        "\n\nla chaine renvoyer par join():" + chaine
    );

