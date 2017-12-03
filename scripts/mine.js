"use strict";
document.getElementById("mine").onerror = () => {
  var node = document.createElement("h4");
  var text = document.createTextNode("Please allow scripts from authedmine.com.");
  node.appendChild(text);
  document.getElementById("notify").appendChild(node);
}
document.getElementById("mine").onload = () => {
  var node = document.createElement("h4");
  var text = document.createTextNode("It's not a good idea to increase threads past what it initially is.");
  node.appendChild(text);
  document.getElementById("notify").appendChild(node);
  document.querySelector(".coinhive-miner").style.height = "310px";
  window.addEventListener("beforeunload", ev => {
    ev.returnValue = "The miner may be running. Are you sure want to leave this page?";
  })
}
