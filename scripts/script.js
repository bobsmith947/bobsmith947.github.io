"use strict";
document.body.onload = () => {
  var elems = document.links, len = elems.length, i = undefined;
  //set link class based on href and add appropriate target
  for (i = 0; i < len; i++) {
    if (elems[i].href.includes(document.domain)) elems[i].className = "int";
    else {
      elems[i].className = "ext";
      elems[i].target = "_blank";
    }
  }
  //add listener to expand images on click
  elems = document.images;
  len = elems.length;
  for (i = 0; i < len; i++) {
    if (screen.width > 1024 && elems[i].className === "exp") {
      elems[i].addEventListener("click", expandImg);
      elems[i].title = "Click to expand.";
      elems[i].style.width = "15%";
    }
  }
  //modify tip text based on screen width
  var str = "each box to view the full list."
  elems = document.getElementsByClassName("boxTip");
  len = elems.length;
  for (i = 0; i < len; i++) {
    if (elems[i] !== null && elems[i] !== undefined) {
      if (screen.width <= 1024) elems[i].innerHTML = "Tap " + str;
      else elems[i].innerHTML = "Click " + str;
    }
  }
  //set progress bar value
  var vals = ["100", "50", "5", "10", "0", "0", "0", "0"];
  elems = document.querySelectorAll("progress[value]");
  len = elems.length;
  for (i = 0; i < len; i++) elems[i].value = vals[i];
}
//clickable boxes
var prev = undefined;
document.body.onclick = ev => {
  var tar = ev.target;
  if (prev !== undefined && prev !== null) {
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
      document.getElementById("top").src = "img/tiger.png";
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
function expandImg(ev) {
  var elem = ev.target, w = elem.naturalWidth;
  switch(elem.style.width) {
    case "15%" :
      if (w > 0.9 * screen.width) elem.style.width = "90%";
      else elem.style.width = w + "px";
      elem.title = "Click to shrink."
      break;
    default :
      elem.style.width = "15%";
      elem.title = "Click to expand.";
      break;
  }
}
