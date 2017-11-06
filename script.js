"use strict";
function setLinks() {
  var elems = document.links, len = elems.length, i = undefined;
  for (i = 0; i < len; i++) {
    if (elems[i].href.includes(document.domain)) elems[i].className = "int";
    else elems[i].className = "ext";
  }
  elems = document.getElementsByClassName("ext");
  for (i = 0; i < len; i++) elems[i].target = "_blank";
  return undefined;
}
function boxAdapt() {
  var tip = document.getElementById("boxTip"), str = "each box to view the full list.";
  try {
    if (screen.width <= 768) tip.innerHTML = "Tap " + str;
    else tip.innerHTML = "Click " + str;
} finally {
    return undefined;
}
}
document.body.onload = setLinks();
document.body.onload = boxAdapt();
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
function selectBox(elem) {
  elem.style.overflow = "auto";
  elem.style.border = "3px solid gray";
  return undefined;
}
function resetBox(elem) {
  elem.style.overflow = "hidden";
  elem.style.border = "3px dashed gray";
  return undefined;
}
//konami code easter egg
var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], pos = 0;
document.body.onkeydown = ev => {
  var key = ev.keyCode;
  if (key === keys[pos]) {
    pos++;
    if(pos >= keys.length) {
      pos = 0;
      document.getElementById("top").srcset = "tiger.png 1280w";
    }
  } else pos = 0;
}
