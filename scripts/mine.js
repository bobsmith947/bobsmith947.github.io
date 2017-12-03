"use strict";
var miner = document.getElementById("mine");
miner.addEventListener("error", fail);
miner.addEventListener("load", success);
function fail(ev) {
  var node = document.createElement("h4");
  var text = document.createTextNode("Please allow scripts from authedmine.com.");
  node.appendChild(text);
  document.getElementById("notify").appendChild(node);
}
function success(ev) {
  document.querySelector(".coinhive-miner").style.height = "310px";
  var node = document.createElement("h4");
  var text = document.createTextNode("It's not a good idea to increase threads past what it initially is.");
  node.appendChild(text);
  document.getElementById("notify").appendChild(node);
}
