// Constanten
const planktonAfbeelding = document.querySelector('img');

// Variabelen 
let h1Naam = document.querySelector('h1');
let naam = "naam van jouw plankton";
let honger = 50;
let training = 50;
let geluk = 50;






// Functie om de naam van de Tamagotchi in te stellen en de startstatus van de balken bij te werken
function verwerkFormulier(event) {
    event.preventDefault();
    tamagotchiNaam = document.querySelector('.naaminput').value;
    document.querySelector('h1').textContent = tamagotchiNaam;
}
document.querySelector('h1').textContent = naam;


// Functie om de voortgangsbalken bij te werken
function updateBars() {
    document.getElementById('hongerWaarde').value = honger;
    document.getElementById('trainWaarde').value = training;
    document.getElementById('aaiWaarde').value = geluk;
    checkStatus();
}

// Functie om de status van de Tamagotchi te controleren en afbeelding overeenkomstig te wijzigen
function checkStatus() {
    if (honger >= 90) {
        planktonAfbeelding.src = './assets/Plankton_dik.png';
    } else if (geluk >= 90) {
        planktonAfbeelding.src = './assets/Plankton_cute.png';
    } else if (training >= 90) {
        planktonAfbeelding.src = './assets/Plankton_gespierd.png';
    } else {
        planktonAfbeelding.src = './assets/Plankton_normaal.webp';
    }
}
// hulp gekregen van Daan

// Event listeners toevoegen

function voedselOmhoog() {
    honger += 10;
    if (honger > 100) {
        honger = 100;
    }
    updateBars();
};



function trainOmhoog() {
    training += 10;
    if (training > 100) {
        training = 100;
    }
    updateBars();
};


 function aaiOmhoog() {
    geluk += 10;
    if (geluk > 100) {
        geluk = 100;
    }
    updateBars();
};



// Event listeners
document.querySelector('form').addEventListener('submit', verwerkFormulier); // Event listener voor naam geven
document.getElementById('voedselButton').addEventListener('click', voedselOmhoog); // Event listener voor voedsel
document.getElementById('trainButton').addEventListener('click', trainOmhoog); // Event listener voor trainen
document.getElementById('aaiButton').addEventListener('click', aaiOmhoog); // Event listener voor aaien

//statement


// bronnen
// // :https://theadventuresofgarythesnail.fandom.com/wiki/Overweight_Plankton, 
// // https://spongebob.fandom.com/wiki/The_Ghost_of_Plankton?file=The_Ghost_of_Plankton_028.png
// // https://www.deviantart.com/redhead64/art/REQUEST-Plank-Ton-977978968
// //https://kidsnextdoorfanfiction.fandom.com/wiki/Sheldon_J._Plankton
