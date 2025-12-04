// Incrémentation et décrémentation
let x = 0,
    xprime = 0,
    alpha = 10,
    alphaprime = 10;

    // post-incrémentation et post-décrémentation
let y = x++;
let beta = alpha--;

// pré-incrémentation et pré-décrémentation
let yprime = ++xprime;
let betaprime = --alphaprime;

alert("y : " +y +
    "\nx : " +x +
    "\nbeta : " +beta +
    "\nalpha : " +alpha +
    "\nyprime : " +yprime +
    "\nxprime : " +xprime +
    "\nbetaprime : " +betaprime +
    "\nalphaprime : " +alphaprime
);

