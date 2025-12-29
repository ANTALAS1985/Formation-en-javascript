//classer et anverser les valeurs sous ordre aphabetique
let prenoms =["Rachid", "rachid", "Sonia", "sonia"],
    p = "";
   
    prenoms.sort();
    prenoms.reverse();

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert("classification  et inversement de donée par ordre alphabetique et les majuscule qui sont prise en compte avant les minuscules : \n\n " + p);


