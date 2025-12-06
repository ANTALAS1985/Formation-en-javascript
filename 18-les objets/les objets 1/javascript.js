// Déclaration d'une variable de type primitif (string)
let primitive = "je suis une valeur primitive";

//variable de type objet
//moi est un objet littéral.
let moi = {
    prenom : "mustapha",//prenom, nom et age sont des propriétés de l'objet moi
    nom : "RAAB",
    age: 40,

    //identite est une méthode de l'objet moi 
 //Une méthode est une fonction stockée dans une propriété d’un objet.
   
 identite : function(){ 
       
        return "Pénom: " + this.prenom+
              "\nNom: "+ this.nom +
              "\nAge: " +this.age;   
            }
}
//appel de la méthode identite de l'objet moi
alert(moi.identite());