var obj_string = new String ("je suis un objet");

//*ce n'est pas conseiller d'utiliser les new object.

var obj_cree = new Object();

obj_cree.prenom = "mustapha";
obj_cree.nom = "RAAB";
obj_cree.age = 40;

alert("afficher le prenom  :" + obj_cree.prenom +
    "\n affcher le nom :" + obj_cree.nom +
    "\n afficher l'age :" + obj_cree.age
);
