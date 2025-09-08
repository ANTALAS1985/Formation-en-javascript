//*les objets literale

var moi ={
     prenom: "mustapha",
     nom: "RAAB",
     age: 40,
     id: function(){
          return this.prenom + " " + this.nom + " " + this.age;

     }
}
alert(moi.id());