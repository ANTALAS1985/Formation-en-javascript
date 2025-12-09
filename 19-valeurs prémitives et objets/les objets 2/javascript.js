
let primitive = "je suis une valeur primitive";
let typePrimitive = typeof(primitive); //typePrimitive vaudra "string"
let longueurprim = primitive.length;//longueurprim vaudra 26
let majprimitive = primitive.toUpperCase();//maj vaudra "JE SUIS UNE VALEUR PRIMITIVE"

//les objets natifs js(l'ojet number / string / boolean)

let chaine = new String("je sis un objet string");
let typeChaine = typeof(chaine); //typeChaine vaudra "object"
let longueurchaine =primitive.length; //longueurchaine vaudra 23
let majchaine = chaine.toUpperCase(); //majchaine vaudra "JE SIS UN OBJET STRING"

alert("tipre de var primitive: " + typePrimitive +
     "\nType de typechaine: " + typeChaine);


//c'est mieux d'utiliser les valeurs primitives plutot que les objets natifs.
alert("longueur de la primitive: " + longueurprim +
     "\nprimitive en majuscule: " + majprimitive +
     "\nlongueur de la chaine: " + longueurchaine +
     "\nchaine en majuscule: " + majchaine
);