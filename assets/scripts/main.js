// main.js

let form = document.getElementById("party-horn-form");
let audio = document.getElementById("horn-sound");
let volume = document.getElementById("volume-number");
let slider = document.getElementById("volume-slider");
let honkBtn = document.getElementById("honk-btn");
let airH = document.getElementById("radio-air-horn");
let carH = document.getElementById("radio-car-horn");
let partyH = document.getElementById("radio-party-horn");
let checkbox = document.getElementById("audio-selection");
let sound = document.getElementById("horn-sound");
let volImg = document.getElementById("volume-image");
let soundImg = document.getElementById("sound-image");
form.addEventListener("submit", honk);
slider.addEventListener("input", setvolume1);
volume.addEventListener("change", setvolume2);
checkbox.addEventListener("change", horn);

function honk(e) {
     e.preventDefault(); 
    audio.play();    
}

function setvolume1() {
    honkBtn.disabled = false;
    if(slider.value == 0) { 
        honkBtn.disabled = true;
        volImg.src = "./assets/media/icons/volume-level-0.svg"; 
    }
    else if(slider.value < 34) { volImg.src = "./assets/media/icons/volume-level-1.svg"; }
    else if(slider.value < 67) { volImg.src = "./assets/media/icons/volume-level-2.svg"; }
    else { volImg.src = "./assets/media/icons/volume-level-3.svg"; }
    volume.value = slider.value;
    audio.volume = slider.value / 100;
    return false;
}

function setvolume2() {
    honkBtn.disabled = false;
    if(volume.value == 0) { 
        honkBtn.disabled = true;
        volImg.src = "./assets/media/icons/volume-level-0.svg"; 
    }
    else if(volume.value < 34) { volImg.src = "./assets/media/icons/volume-level-1.svg"; }
    else if(volume.value < 67) { volImg.src = "./assets/media/icons/volume-level-2.svg"; }
    else { volImg.src = "./assets/media/icons/volume-level-3.svg"; }
    slider.value = volume.value;
    audio.volume = volume.value / 100;
}

function horn() {
    if(airH.checked) { 
        soundImg.src = "./assets/media/images/air-horn.svg"; 
        audio.src="./assets/media/audio/air-horn.mp3";
    }
    
    if(partyH.checked) { 
        soundImg.src = "./assets/media/images/party-horn.svg"; 
        audio.src = "./assets/media/audio/party-horn.mp3";
    }
    
    if(carH.checked) { 
        soundImg.src = "./assets/media/images/car.svg";
        audio.src="./assets/media/audio/car-horn.mp3";
    }

}