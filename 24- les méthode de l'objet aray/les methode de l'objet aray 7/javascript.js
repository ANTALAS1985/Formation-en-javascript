//classre les valeur sous ordre aphabetique
let prenoms =["Rachid", "rachid", "Sonia", "sonia"],
    p = "";
   
    prenoms.sort();

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert("classification de donée par ordre alphabetique et les majuscule qui sont prise en compte avant les minuscules : \n\n " + p);


