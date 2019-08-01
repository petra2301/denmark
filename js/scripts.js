let denmark = document.querySelector("#denmark");
let norway = document.querySelector("#norway");
let startBtn = document.querySelector("#startbutton");
let norspeechbubble1 = document.querySelector("#norspeaking");
let dkspeechbubble1 = document.querySelector("#dkspeaking");
let norspeechbubble2 = document.querySelector("#norspeaking2");
let dkspeechbubble2 = document.querySelector("#dkspeaking2");
let whatDoContainer = document.querySelector("#buttoncontainer");
let leaveBtn = document.querySelector("#button1");
let scene = document.querySelector("#scene");
let sailAwayScene = document.querySelector("#sailaway");
let drinkingSound = new Audio('../sounds/drinking.mp3');
let walkingSound = new Audio('../sounds/walk3.mp3');
let confusedSound = new Audio('../sounds/cricket2.mp3');
let wrap = document.querySelector("#wrap");
let drinkBtn = document.querySelector("#button2");

startBtn.addEventListener("click", dkDrinking);

function dkDrinking() {
    denmark.classList.add("dkDrinking");
    drinkingSound.play();
    startBtn.classList.add("startbuttonhidden");
    denmark.addEventListener("animationend", norWalking);
}

function norWalking() {
    denmark.classList.remove("dkDrinking");
    norway.classList.add("norWalking");
    walkingSound.play();
    norway.addEventListener("animationend", norSpeech1);
}

function norSpeech1() {
    norspeechbubble1.classList.remove("hiddenspeech");
    norspeechbubble1.classList.add("norspeech1");
    norspeechbubble1.addEventListener("animationend", dkSpeech1);
}

function dkSpeech1() {
    dkspeechbubble1.classList.remove("hiddenspeech");
    dkspeechbubble1.classList.add("dkspeech1");
    dkspeechbubble1.addEventListener("animationend", norSpeech2);
}

function norSpeech2() {
    norspeechbubble2.classList.remove("hiddenspeech");
    norspeechbubble2.classList.add("norspeech2");
    norspeechbubble2.addEventListener("animationend", dkSpeech2);
}

function dkSpeech2() {
    dkspeechbubble2.classList.remove("hiddenspeech");
    dkspeechbubble2.classList.add("dkspeech2");
    dkspeechbubble2.addEventListener("animationend", norConfused);
}

function norConfused() {
    norway.classList.add("norConfused");
    confusedSound.play();
    confusedSound.addEventListener("ended", whatDo);
}

function whatDo() {
    whatDoContainer.classList.remove("hiddencontainer");
    whatDoContainer.classList.add("displaycontainer");
}

leaveBtn.addEventListener("click", norLeave);

function norLeave() {
    wrap.classList.add("hiddencontainer");
    sailAwayScene.classList.remove("hiddencontainer");
    sailAwayScene.classList.add("displaycontainer");
}

drinkBtn.addEventListener("click", allDrink);

function allDrink() {
    drinkingSound.loop = true;
    drinkingSound.play();
    norway.classList.add("norDrinking");
    denmark.classList.remove("dkDrinking");
    denmark.classList.add("dkDrinkingForever");
    whatDoContainer.classList.remove("displaycontainer");
    whatDoContainer.classList.add("hiddencontainer");
}
