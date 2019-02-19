'use strict';
console.log('reading js');

document.querySelector("#usbButton").addEventListener("click", usbMessage);
document.querySelector("#sketchButton").addEventListener("click", sketchMessage);
document.querySelector("#pillButton").addEventListener("click", pillMessage);

function usbMessage() {
  if (usbMsg.style.display === "block") {
    usbMsg.style.display = "none";
  } else {
    usbMsg.style.display = "block";
  }
}

function sketchMessage() {
  if (sketchMsg.style.display === "block") {
    sketchMsg.style.display = "none";
  } else {
    sketchMsg.style.display = "block";
  sketchMsg
  }
}

function pillMessage() {
  if (pillMsg.style.display === "block") {
    pillMsg.style.display = "none";
  } else {
    pillMsg.style.display = "block";
  }
}

// function usb() {
//   var usb = document.getElementById("usb-info");
//   if (usb.style.display === "none") {
//     usb.style.display = "block";
//   } else {
//     usb.style.display = "none";
//   }
// }


// document.querySelector("#backpack").addEventListener("click", showStuff);
// document.querySelector("#hide").addEventListener("click", hideStuff);
//
// var sketchbook = document.querySelector("#sketchbook");
// var usb = document.querySelector("#usb");
// var pillbox = document.querySelector("#pillbox");
//
// function showStuff(evt){
//   console.log('showStuff');
//
//   //touch.className = "show";
//   document.getElementById("touch").className='show';
// }
//
// function hideStuff() {
//   document.getElementById("touch").style.display = "none";
//   //touch.className = "hide";
// }
