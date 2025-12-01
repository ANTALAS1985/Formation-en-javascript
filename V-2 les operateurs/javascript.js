let age = 40; // valeur en dur
document.write(age); 

let N = 5;
    N = N + 1; //on peut aussi écrire N += 1;
    N += 3;
document.write(N);
// N++: post-incrémentation, ++N : pré-incrémentation
let x = 10;
document.write(x++); // affiche 10, puis x devient 11
document.write(x); // affiche 11
document.write(++x); // x devient 12, puis affiche 12

//N--: post-décrémentation, --N : pré-décrémentation.

//les opérateurs de comparaison
document.write(5>3); // true

//les opérateurs d'égalité
document.write(5==3+2); // true
document.write(5=== '5'); // false (égalité stricte, même type)
document.writeln(5 != 10); // true
document.write(5 !== '5'); // true (5 n'est pas égal à '5' en type et en valeur)