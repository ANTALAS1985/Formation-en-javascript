let x = 4;
function locale() {
    let x = 7;
    return x;  
}
alert( "x global: " + x + // affiche 4
    "\nx locale: " + locale() ); // affiche 7