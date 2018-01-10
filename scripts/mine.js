document.getElementById("mine").onerror = () => {
  var miner = document.querySelector(".coinhive-miner");
  miner.innerHTML = "Please allow scripts from authedmine.com.";
  miner.style.height = "1em";
}
document.getElementById("mine").onload = () => {
  var node = document.createElement("h4");
  var text = document.createTextNode("It's not a good idea to increase threads past what it initially is.");
  node.appendChild(text);
  document.getElementById("notify").appendChild(node);
  window.addEventListener("beforeunload", ev => {
    ev.returnValue = "The miner may be running. Are you sure want to leave this page?";
  })
}
