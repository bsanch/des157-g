'use strict';
console.log('reading js');

document.querySelector("#backpack").addEventListener("click", showStuff);
document.querySelector("#hide").addEventListener("click", hideStuff);

var sketchbook = document.querySelector("#sketchbook");
var usb = document.querySelector("#usb");
var pillbox = document.querySelector("#pillbox");

function showStuff(evt){
  console.log('showStuff');

  //touch.className = "show";
  document.getElementById("touch").className='show';
}

function hideStuff() {
  document.getElementById("touch").style.display = "none";
  //touch.className = "hide";
}
