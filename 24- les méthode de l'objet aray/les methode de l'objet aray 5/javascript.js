//preciser ou ajouter  une valeur dans un tableau avec splice
let prenoms =["rachid", "mustapha", "sonia", "Antalas"],
    p = "";
   

    prenoms.splice(1,0,"smail","lyas");

    for(let i = 0 ; i < prenoms.length; i++){
        p += "prénom n°" + (i+1)+ " : " + prenoms[i] + "\n";
    }
    alert("nouveau tableau : \n\n " + p);


