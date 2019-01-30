'use strict';
//console.log('reading js');

document.querySelector('#s').addEventListener('click', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

function processForm(evt){
  var name = document.querySelector("#name").value;
  var taste = document.querySelector("#taste").value;
  var flavor = document.querySelector("#flavor").value;
  var syrup = document.querySelector("#syrup").value;
  var fruit = document.querySelector("#fruit").value;
  var topping = document.querySelector("#topping").value;
  var myMsg = document.querySelector("#myMsg");

  myMsg.innerHTML = "Have you tried the " + name + " Specialty? It's a " + taste + " sundae made up of " + flavor + " ice cream that's drizzled with " + syrup + " and topped with " + fruit + " and " + topping + "! You should try it sometime!";

  msgSection.className = "show";

evt.preventDefault();
}

function resetForm() {
  msgSection.className = "hide";
}
