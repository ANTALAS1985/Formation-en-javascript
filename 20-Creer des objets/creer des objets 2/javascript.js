//c'es conseillé d'utiliser les objets littéral pour créer des objets en javascript
let moi={
     prenom: "Mustapha",
     nom: "RAAB",
     age: 40,
     sexe: "Masculin",
     adresse: "22 rue alfred de musset 94400",

     id: function(){
          return this.prenom+" "+this.nom+" a "+this.age+" ans, habite au "+this.adresse;
     }

}
alert(moi.id());