var heure = "dix";

if(typeof(heure)=="number"){
    if(heure<12 ==true){
    alert("c'est le matin");
    }
    else if(heure == 12 ==true){
    alert("il est midi");
    }
    else if(heure <=18 == true){
    alert("c'est l'aprs midi");
    }
    else{
    alert("c'est le soir");
    }
}
else{
    alert("mauvais type de valeur");
}