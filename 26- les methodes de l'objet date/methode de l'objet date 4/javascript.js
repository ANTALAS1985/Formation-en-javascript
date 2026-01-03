//Afficher la date et l'heure en français
let d = new Date();

let dy = d.getFullYear();
let dmo =d.getMonth();
let dday = d.getDay();
let ddate = d.getDate();
let dh = d.getHours();
let dmi = d.getMinutes();
let ds = d.getSeconds();
let dms = d.getMilliseconds();

let mois =["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
let jours =["dimanche","lundii", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

//alert date en français

alert("nous sommes : " + jours[dday] + " " + ddate + " " + mois[dmo] + " " + dy +
    "\net il est " + dh + " heures " + dmi + " minutes " + ds + " secondes " + dms + " millisecondes."
);