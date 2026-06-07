document.addEventListener("DOMContentLoaded", () => {

// ELEMENTS
const enter = document.getElementById("enter");
const passwordBox = document.getElementById("password");
const unlock = document.getElementById("unlock");
const msg = document.getElementById("msg");
const input = document.getElementById("pw");

const hero = document.querySelector(".hero");
const story = document.querySelector(".story");
const endScreen = document.querySelector(".end-screen");

// MUSIC
const musicBtn = document.getElementById("musicBtn");
const music = new Audio("music/music.mp3");
music.loop = true;
music.volume = 0.6;

let isPlaying = false;


// =====================
// ENTER BUTTON
// =====================
enter.addEventListener("click", () => {
hero.style.display = "none";
passwordBox.style.display = "flex";
});


// =====================
// PASSWORD CHECK
// =====================
unlock.addEventListener("click", () => {

const value = input.value.trim();

if (value === "28/06/2008") {

msg.style.color = "lightgreen";
msg.innerText = "Unlocking... ❤️";

setTimeout(() => {

passwordBox.style.display = "none";
story.style.display = "block";
story.classList.add("fade-in");

// after story → end screen
setTimeout(() => {
story.style.display = "none";
endScreen.style.display = "flex";
}, 6000);

}, 1000);

} else {
msg.style.color = "red";
msg.innerText = "Wrong Password ❤️";
}

});


// =====================
// MUSIC CONTROL
// =====================
musicBtn.addEventListener("click", () => {

if (!isPlaying) {
music.play();
musicBtn.innerText = "⏸ Pause Music";
isPlaying = true;
} else {
music.pause();
musicBtn.innerText = "🎵 Play Music";
isPlaying = false;
}

});

});