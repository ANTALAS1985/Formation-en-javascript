// dans les variable suivannte on note en dure directement dans la variable.
var age =
    age =25;

var quantité = 500;
document.write(quantité);
alert(age);

//chager la valeur de la variable.
var article = "livre";
document.write(article);

    article = "stylo";
document.write(article);

// la fonnction typeof

document.write(typeof article);
document.write(typeof quantité);

// les variable booleenne
var majeur = true;
document.write(typeof majeur);

//dans les variable suivante on note en dynamique dans les variables.
var name = prompt("votre nom ?");
document.write(name);
document.write(typeof name);
 
// parser ou caster une variable dynamyque.
var prix = prompt(" le prix de l'artilcle?");
    prix =parseInt(prix);
document.write(prix);
document.write(typeof prix);

/* on a vu dans ce document js
document.write();
alert();
confirm();
propmt();
parserInt();
ParserFloat();
*/
// deusieme partie : les constantes.
 const pi = 3.14;
 document.write(pi);

 /*const: la valeur constante ne peut pas etre modifiee.
 type de données sonstant, mais contenu modifiable pour les objets et les tableaux.
 */
// on peut pas changer type de données pour les constant
const data = 14;
      data  = "14"; // erreur : on peut pas changer la valeur d'une constante.