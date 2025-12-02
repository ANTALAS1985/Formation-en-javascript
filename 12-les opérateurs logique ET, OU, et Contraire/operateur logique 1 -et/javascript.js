//les operateurs logique.&& 
let heure = 18;

if(heure>=0 && heure <12){
      alert("c'est le matin")
}
else if(heure === 12){
      alert("c'est midi pile")
}
else if(heure > 12 && heure <= 24){
      alert("c'est l'apres midi ou le soir")

}
else{alert("la valeur entrée ne semble pas vilide")}
