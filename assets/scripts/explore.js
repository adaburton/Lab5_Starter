// explore.js

window.addEventListener('DOMContentLoaded', init);
window.speechSynthesis.addEventListener('voiceschanged', initVoices);

function init() {

  // I found this line was necessary for Firefox, 
  // since the browser doesn't automatically "add"
  // the voices to the browser, triggering 'voiceschanged'
  // a la google chrome
  window.speechSynthesis.getVoices();

  document.querySelector("button").addEventListener("click", speak);

}

// initialize voice select
function initVoices(){
  let vox = window.speechSynthesis.getVoices();
  let lst = document.querySelector("select");

  for (let v in vox){
    console.log(vox[v].name);
    let opt = document.createElement("option");
    opt.text = vox[v].name;
    opt.value = vox[v];
    lst.appendChild(opt);
  } 
}

function speak(){
  


}