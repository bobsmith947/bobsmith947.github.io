"use strict";
document.body.onload = function() {
  var tip = document.getElementById("boxTip"), str = "each box to view the full list.";
  var elems = document.links, len = elems.length, i = undefined;
  //modify box tip text based on screen width
  if (tip !== null && tip !== undefined) {
    if (screen.width <= 1024) tip.innerHTML = "Tap " + str;
    else tip.innerHTML = "Click " + str;
  }
  //set link class based on href and add appropriate target
  for (i = 0; i < len; i++) {
    if (elems[i].href.includes(document.domain)) elems[i].className = "int";
    else elems[i].className = "ext";
  }
  elems = document.getElementsByClassName("ext");
  len = elems.length;
  for (i = 0; i < len; i++) elems[i].target = "_blank";
  //add listener to expand images on click
  elems = document.images;
  len = elems.length;
  for (i = 0; i < len; i++) {
    if (screen.width > 1024 && elems[i].className === "exp") {
      elems[i].addEventListener("click", expand);
      elems[i].title = "Click to expand.";
    }
  }
}
//clickable boxes
var prev = undefined;
document.body.onclick = ev => {
  var tar = ev.target;
  if (prev !== undefined) {
    if (prev.parentElement.className === "box") resetBox(prev.parentElement);
    else if (prev.className === "box") resetBox(prev);
  }
  if (tar.parentElement.className === "box") selectBox(tar.parentElement);
  else if (tar.className === "box") selectBox(tar);
  prev = tar;
}
//konami code easter egg
var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], pos = 0;
document.body.onkeydown = ev => {
  var key = ev.keyCode;
  if (key === keys[pos]) {
    pos++;
    if(pos >= keys.length) {
      pos = 0;
      document.getElementById("top").srcset = "img/tiger.png 1280w";
    }
  } else pos = 0;
}
function selectBox(elem) {
  elem.style.overflow = "auto";
  elem.style.border = "3px solid gray";
}
function resetBox(elem) {
  elem.style.overflow = "hidden";
  elem.style.border = "3px dashed gray";
}
function expand(ev) {
  var size = ev.target.sizes;
  switch(size) {
    case "90vw":
      ev.target.sizes = "(max-width: 768px) 30vw, 15vw";
      break;
    case "(max-width: 768px) 30vw, 15vw":
      ev.target.sizes = "90vw";
      break;
    default:
      break;
  }
}
