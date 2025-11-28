//* la methode indexOf()
var texte = "j'apprends le JAVASCRIPT";

var premiere = texte.indexOf ("p");
var derniere = texte.lastIndexOf("p");
var sequence = texte.indexOf("le");

//* coomencer a rechercher a partir d'une position.
var partposition = texte.indexOf('J', 1);

alert('premier "p" trouvé en position premiere: ' + premiere + 
     '\nderrnier "p" trouvé en position: ' + derniere +
     '\nsequence "le" trouvé en position: ' + sequence +
     '\nUn "J" trouvé en position: ' + partposition
);
