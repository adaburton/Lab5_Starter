// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("loaded!");

  //initialize everything.
  updateSound();
  updateVolume();

  // Alter the image and sound based on the user's selection in horn-select
  document.getElementById("horn-select").addEventListener('change', updateSound);

  // Alter the page to reflect the user's selection
  document.getElementById("volume").addEventListener('change', updateVolume);
  
  // Play the selected sound when the button is pressed
  document.querySelector("button").addEventListener('click', playSound);

}

//Updates the page to reflect the user's selection
function updateSound(){
  let img = document.querySelector("header + img");
  let snd = document.querySelector("audio");
  
  switch(document.getElementById("horn-select").value){
    case "air-horn":
      // air settings
      img.setAttribute("src", "assets/images/air-horn.svg");
      img.setAttribute("alt", "Air Horn");
      snd.setAttribute("src", "assets/audio/air-horn.mp3");
      break;
    case "car-horn":
      // car settings
      img.setAttribute("src", "assets/images/car-horn.svg");
      img.setAttribute("alt", "Car Horn");
      snd.setAttribute("src", "assets/audio/car-horn.mp3");
      break;
    case "party-horn":
      // party settings
      img.setAttribute("src", "assets/images/party-horn.svg");
      img.setAttribute("alt", "Party Horn");
      snd.setAttribute("src", "assets/audio/party-horn.mp3");
      break;
    default:
      // default settings
      img.setAttribute("src", "assets/images/no-image.png");
      img.setAttribute("alt", "No image selected");
      snd.setAttribute("src", "");
  }

  console.log(img.getAttribute("alt"));
  console.log(snd.getAttribute("src"));
}

// Alter the page to reflect the user's selection
function updateVolume(){
  let vol = document.getElementById("volume").value;
  let img = document.querySelector("[id='volume-controls'] > img");
  let snd = document.querySelector("audio");

  switch(true){
    case vol == 0:
      snd.volume = 0.0;
      img.setAttribute("src", "assets/icons/volume-level-0.svg");
      break;
    case vol < 33:
      snd.volume = vol / 100.0;
      img.setAttribute("src", "assets/icons/volume-level-1.svg");
      break;
    case vol < 67:
      snd.volume = vol / 100.0;
      img.setAttribute("src", "assets/icons/volume-level-2.svg");
      break;
    case vol < 101:
      snd.volume = vol / 100.0;
      img.setAttribute("src", "assets/icons/volume-level-3.svg");
      break;
    default:

  }
  console.log(vol);
  console.log(img.getAttribute("alt"));
  console.log(snd.volume);
}

// play selected sound
function playSound(){
  document.querySelector("audio").play();
}