var premitive  = "je suis une valeur primitive";

var moiobjet = {
    prenom: "Mustapha",
    nom:"RAAB",
    age: 40,

    identité : function(){
        return 'Prénom:' + this.prenom+
               '\nNom :' + this.nom+
            '\nAge:' + this.age;
    }
}

alert(moiobjet.identité());