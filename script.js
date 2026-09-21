/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 1200);

});


/* =========================
   PIN SYSTEM
========================= */

const unlockBtn = document.getElementById("unlockBtn");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

const pinScreen = document.getElementById("pinScreen");
const website = document.getElementById("website");

unlockBtn.addEventListener("click", () => {

    if(pinInput.value === "2708"){

        pinScreen.style.display = "none";
        website.style.display = "block";

        pinError.innerText = "";

    }else{

        pinError.innerText = "Wrong PIN 💔";

        pinInput.value = "";

    }

});


/* =========================
   OPEN BOOK
========================= */

const openBookBtn =
document.getElementById("openBookBtn");

openBookBtn.addEventListener("click", () => {

    const music =
        document.getElementById("bgMusic");

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

    document
    .getElementById("scrapbook")
    .scrollIntoView({
        behavior:"smooth"
    });

});


/* =========================
   LETTER OPEN
========================= */

const openLetter =
document.getElementById("openLetter");

const letterPaper =
document.getElementById("letterPaper");

openLetter.addEventListener("click", () => {

    if(letterPaper.style.display === "block"){

        letterPaper.style.display = "none";

    }else{

        letterPaper.style.display = "block";

        letterPaper.scrollIntoView({
            behavior:"smooth"
        });

    }

});


/* =========================
   QUIZ
========================= */

const checkQuiz =
document.getElementById("checkQuiz");

checkQuiz.addEventListener("click", () => {

    const a1 = document
        .getElementById("answer1")
        .value
        .toLowerCase()
        .trim();

    const a2 = document
        .getElementById("answer2")
        .value
        .toLowerCase()
        .trim();

    const result =
        document.getElementById("quizResult");


    /* 
       QUESTION 1
       When did we officially start dating?
    */

    const correctDate =
        a1 === "27 august 2026" ||
        a1 === "27 agustus 2026" ||
        a1 === "27/08/2026" ||
        a1 === "27-08-2026" ||
        a1 === "27082026";


    /*
       QUESTION 2
       How much do you really love me?
    */

    const correctLove =
        a2 === "i love you" ||
        a2 === "i love you so much" ||
        a2 === "so much" ||
        a2 === "very much" ||
        a2 === "a lot" ||
        a2 === "sangat mencintaimu" ||
        a2 === "banget" ||
        a2.includes("love you");


    if(correctDate && correctLove){

        result.style.color = "#6E1B2A";

        result.innerText =
            "Correct! Memory unlocked 🤍✨";


        document
        .getElementById("specialMemory")
        .scrollIntoView({
            behavior:"smooth"
        });

    }else{

        result.style.color = "#B76A78";

        result.innerText =
            "Try again, Sayang 🥹🤍";

    }

});


/* =========================
   REVEAL MEMORY
========================= */

const revealBtn =
document.getElementById("revealBtn");

revealBtn.addEventListener("click", () => {

    document
    .getElementById("specialPhoto")
    .classList.add("show");

});


/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateCounter(){

    const startDate =
        new Date("2026-08-27T00:00:00");

    const now =
        new Date();

    const diff =
        now.getTime() -
        startDate.getTime();


    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            diff /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            diff /
            (1000 * 60)
        );


    document
    .getElementById("days")
    .innerText =
        Math.max(0, days);


    document
    .getElementById("hours")
    .innerText =
        Math.max(0, hours);


    document
    .getElementById("minutes")
    .innerText =
        Math.max(0, minutes);

}


updateCounter();

setInterval(updateCounter, 1000);


/* =========================
   SECRET MESSAGE
========================= */

const stars =
document.querySelectorAll(".secret-star");

let clickedStars = 0;


stars.forEach(star => {

    star.addEventListener("click", () => {

        if(!star.classList.contains("active")){

            star.classList.add("active");

            clickedStars++;

            star.style.transform =
                "scale(1.5)";

            star.style.opacity =
                "0.7";

        }


        if(clickedStars >= 5){

            document
            .getElementById("secretMessage")
            .style.display =
                "block";


            document
            .getElementById("secretMessage")
            .scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/* =========================
   REPLAY BUTTON
========================= */

const replayBtn =
document.getElementById("replayBtn");

replayBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* =========================
   ENTER KEY PIN
========================= */

pinInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        unlockBtn.click();

    }

});
