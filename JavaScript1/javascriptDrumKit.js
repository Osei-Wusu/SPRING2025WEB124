// Author: Dominic Appiah
// Date: March 6, 2025
// Description: JavaScript file for drum kit project,
//source code adapted from https://javascript30.com
//added code to listen for clicked events

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    var keyCode;
    if (e.type === 'keydown') {
        keyCode = e.keyCode;
    } else if (e.type === 'click') {
        keyCode = e.target.getAttribute('data-key');
    }

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

/* Added code to listen for click events. */

function playSoundClicked(e) {
    const clickedLetter = e.target.id;
    if (!clickedLetter) return;
    e.target.parentNode.classList.add('playing');
    switch (clickedLetter) {
        case "a":
            document.getElementById("audio_a").currentTime = 0;
            document.getElementById("audio_a").play();
            break;
        case "s":
            document.getElementById("audio_s").currentTime = 0;
            document.getElementById("audio_s").play();
            break;
        case "d":
            document.getElementById("audio_d").currentTime = 0;
            document.getElementById("audio_d").play();
            break;
        case "f":
            document.getElementById("audio_f").currentTime = 0;
            document.getElementById("audio_f").play();
            break;
        case "g":
            document.getElementById("audio_g").currentTime = 0;
            document.getElementById("audio_g").play();
            break;
        case "h":
            document.getElementById("audio_h").currentTime = 0;
            document.getElementById("audio_h").play();
            break;
        case "j":
            document.getElementById("audio_j").currentTime = 0;
            document.getElementById("audio_j").play();
            break;
        case "k":
            document.getElementById("audio_k").currentTime = 0;
            document.getElementById("audio_k").play();
            break;
        case "l":
            document.getElementById("audio_l").currentTime = 0;
            document.getElementById("audio_l").play();
            break;
    }
}

// click event listeners for keys
keys.forEach(key => key.addEventListener('click', playSoundClicked));

