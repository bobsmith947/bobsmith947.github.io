"use strict";document.body.onload=function(){var a,b=document.links,c=b.length;for(a=0;a<c;a++)b[a].href.includes("://"+document.domain)?b[a].className="int":(b[a].className="ext",b[a].target="_blank");for(b=document.images,c=b.length,a=0;a<c;a++)1024<screen.width&&"exp"===b[a].className&&(b[a].addEventListener("click",expandImg),b[a].title="Click to expand.",b[a].style.width="15%");var d="each box to view the full list.";for(b=document.getElementsByClassName("boxTip"),c=b.length,a=0;a<c;a++)null!==b[a]&&void 0!==b[a]&&(b[a].innerHTML=1024>=screen.width?"Tap "+d:"Click "+d);var e=["100","75","5","1","0","0","0"];for(b=document.querySelectorAll("progress[value]"),c=b.length,a=0;a<c;a++)b[a].value=e[a],b[a].innerHTML="Progress: "+e[a]+"%"};var prev;document.body.onclick=function(a){var b=a.target;prev!=void 0&&null!==prev&&("box"===prev.parentElement.className?resetBox(prev.parentElement):"box"===prev.className&&resetBox(prev)),"box"===b.parentElement.className?selectBox(b.parentElement):"box"===b.className&&selectBox(b),prev=b};var keys=[38,38,40,40,37,39,37,39,66,65],pos=0;document.body.onkeydown=function(a){var b=a.keyCode;b===keys[pos]?(pos++,pos>=keys.length&&(pos=0,document.getElementById("top").src="img/tiger.png")):pos=0};function selectBox(a){a.style.overflow="auto",a.style.border="3px solid gray"}function resetBox(a){a.style.overflow="hidden",a.style.border="3px dashed gray"}function expandImg(a){var b=a.target,c=b.naturalWidth;switch(b.style.width){case"15%":b.style.width=c>0.9*screen.width?"90%":c+"px",b.title="Click to shrink.";break;default:b.style.width="15%",b.title="Click to expand.";}}
