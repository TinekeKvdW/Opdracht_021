const naam = prompt('Wat is je naam?');
alert('Welkom ' + naam + '! Laten we het spel gaan spelen.');

let nummer = prompt('Voer een cijfer in van 0 t/m 25.')
function getRandomInt(max) {
    return Math.random(0 - 25) * (max - min) + min;
} if (nummer == 22) {
    alert("Het antwoord " + nummer + " is goed. Bedankt" + naam + ", tot de volgende keer!");
} else {
    alert("Het antwoord is fout. Try again.");
}
/*
Ik krijg het niet voor elkaar dat de input van het cijfer opnieuw op het scherm komt
al van alles geprobeerd, maar ik weet het niet. */