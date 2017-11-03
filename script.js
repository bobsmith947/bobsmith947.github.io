//set link class according to href
function setLinks() {
  var elems = document.links;
  for (var i = 0; i < elems.length; i++) {
    if (elems[i].href.includes(document.domain)) elems[i].className = "int";
    else elems[i].className = "ext";
  }
  elems = document.getElementsByClassName("ext");
  for (var i = 0; i < elems.length; i++) elems[i].target = "_blank";
  return null;
}
//switch things that make more sense for mobile
function mobileAdapt() {
  var tip = document.getElementById("boxTip"), str = "each box to view the full list.";
  if (screen.width <= 768) tip.innerHTML = "Tap " + str;
  else tip.innerHTML = "Click " + str;
  return null;
}
//clickable boxes
var prev = null;
document.body.onclick = ev => {
  var tar = (ev.target) ? ev.target : ev.srcElement;
  if (prev !== null) {
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
  return elem;
}
function resetBox(elem) {
  elem.style.overflow = "hidden";
  elem.style.border = "3px dashed gray";
  return elem;
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
