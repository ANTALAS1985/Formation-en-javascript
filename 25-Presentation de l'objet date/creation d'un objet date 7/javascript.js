//format iso d'une date.

let diso1 = new Date("2015-06-15");
let diso2 = new Date("2015-06-15T12:00:00");

// date courte et longue
let dcourte = new Date("06/15/2015");
let dlongue = new Date("january 25 2015 9:00:00");

//date complete
let dcompl = new Date("Sun Jan 25 2015 09:00:00 GMT+0100");

alert("date iso corte : " + diso1 +
        "\ndate iso complete : " +  diso2 + 
        "\n date courte: " + dcourte + 
        "\n date longue : " + dlongue +
        "\ndate compléte : " + dcompl
 );
