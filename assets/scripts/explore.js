// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voicesList = [];
  let testToSpeak = new SpeechSynthesisUtterance();

  updateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = updateVoiceList;
  }

  let voiceSelect = document.getElementById('voice-select');
  //const voices = speechSynthesis.getVoices();
  
  let button = document.querySelector('button');
  let text = document.getElementById('text-to-speak');
  button.addEventListener('click', mySpeak);
  
  testToSpeak.onstart = function() {
    image.src = "assets/images/smiling-open.png";
  }
  
  image.src = "assets/images/smiling.png";

  function updateVoiceList() {
    let voiceSelect = document.getElementById('voice-select');

    voicesList = speechSynthesis.getVoices();

    for (let i = 0; i < voicesList.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voicesList[i].name} (${voicesList[i].lang})`;
      option.setAttribute('data-lang', voicesList[i].lang);
      option.setAttribute('data-name', voicesList[i].name);
      voiceSelect.appendChild(option);
    }
  }

  function mySpeak() {
    testToSpeak = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    for (let i = 0; i < voicesList.length ; i++) {
      if (voicesList[i].name === selectedOption) {
        testToSpeak.voice = voicesList[i];
      }
    }
    speechSynthesis.speak(testToSpeak);
    const image = document.querySelector('img');
    testToSpeak.onstart = function() {
      if (speechSynthesis.speaking === true) {
        image.src = "assets/images/smiling-open.png";
      }
    }

    testToSpeak.onend = function() {
      if (speechSynthesis.speaking === false) {
        image.src = "assets/images/smiling.png";
      }
    }
  }
}