// ==========================================
// Surprise Airways V2.0
// Hauptsteuerung
// ==========================================

let seconds = 30;

// Screens

const startScreen = document.getElementById("startScreen");
const countdownScreen = document.getElementById("countdownScreen");
const scannerScreen = document.getElementById("scannerScreen");
const revealScreen = document.getElementById("revealScreen");
const ticketScreen = document.getElementById("ticketScreen");

// Elemente

const countdown = document.getElementById("countdown");
const startButton = document.getElementById("startButton");
const ticketButton = document.getElementById("ticketButton");

// Sounds

const airplaneAudio = document.getElementById("airplaneAudio");
const drumrollAudio = document.getElementById("drumrollAudio");

// ------------------------------------------
// Startbutton
// ------------------------------------------

startButton.addEventListener("click", startBoarding);

// ------------------------------------------
// Boarding
// ------------------------------------------

function startBoarding(){

    startScreen.classList.add("hidden");
    countdownScreen.classList.remove("hidden");

    airplaneAudio.currentTime = 0;
    airplaneAudio.volume = 0.45;

    airplaneAudio.play().catch(()=>{});

    startCountdown();

}

// ------------------------------------------
// Countdown
// ------------------------------------------

function startCountdown(){

    countdown.textContent = seconds;

    const timer = setInterval(()=>{

        seconds--;

        countdown.textContent = seconds;

        // Trommelwirbel startet
        if(seconds === 10){

            drumrollAudio.currentTime = 0;
            drumrollAudio.volume = 0.85;

            drumrollAudio.play().catch(()=>{});

        }

        if(seconds <= 0){

            clearInterval(timer);

            countdownScreen.classList.add("hidden");

            // Scanner startet
            startDestinationScanner();

        }

    },1000);

}

// ------------------------------------------
// Spanien anzeigen
// ------------------------------------------

function showSpain(){

    scannerScreen.classList.add("hidden");

    revealScreen.classList.remove("hidden");

    const flash = document.getElementById("goldFlash");

    flash.classList.add("flashAnimation");

}

// ------------------------------------------
// Boardingpass anzeigen
// ------------------------------------------

ticketButton.addEventListener("click",()=>{

    revealScreen.classList.add("hidden");

    ticketScreen.classList.remove("hidden");

});

// ------------------------------------------
// Hilfsfunktion
// ------------------------------------------

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}
