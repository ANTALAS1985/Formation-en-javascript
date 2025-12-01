 // les operateurs de comparaison
let x = 7;
let y = 14;

//absolument inferieur
let vrai = x < y;

//inferieur ou egal
let faux = 14 <= 7;

//egal en valeur
let egalval = 4 == "4";

// egal en valeur et en type
let egalvaltype = 4 === "4";

//different en valeur
let difval = 4 != "4"

//different en type et en valeur
let difvaltype = 4 !== "4";

const espace = " "

alert("variable vrai:"+ espace + vrai +
      "\nvarible: faux:"+ espace + faux+
      "\nvarible egalval:"+ espace + egalval+
      "\nvariable egalvaltype:" + espace + egalvaltype + 
      "\nvariable difval:" + espace +difval +
      "\nvariable difvaltype" +espace + difvaltype
 );