// ia methode get
let d = new Date();

let dms = d.getTime();
let dy = d.getUTCFullYear();
let dmo = d.getMonth() + 1;
let ddate = d.getDate();
let dday = d.getDate();

let dh = d.getHours();
let dmi = d.getMinutes();
let ds = d.getSeconds();
let dMs = d.getMilliseconds();

alert("Nous sommes le : " + ddate + " / " + dmo + " / " + dy +
    "\nIl est actuelement : " + dh +":"+ dmi + ":" + ds + ":" + dMs
);