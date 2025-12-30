//Extraire un tableau a partir d'un tableau de base avec slice()
let prenoms =["Rachid", "rachid", "Sonia", "sonia"],
    p = "";
   
    let garcons = prenoms.slice(0,2)

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert("notre taableau de base" + prenoms +
        "\n\nle tableau creer par slice():" + garcons 
    );

