// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("loaded!");

  //initialize everything.
  updateSound();

  // Alter the image and sound based on the user's selection in horn-select
  document.getElementById("horn-select").addEventListener('change', function(){
    console.log("Horn Select: I'm being Changed!");
    //console.log(document.getElementById("horn-select").value);
    updateSound();
  });
  
}

//Updates the page to reflect the user's selection
function updateSound(){
  var img = document.querySelector("header + img");
  var snd = document.querySelector("audio");
  


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

/*
updateSoundIcon(){


}*/

