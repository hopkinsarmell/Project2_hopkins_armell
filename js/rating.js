document.getElementById("bir").onclick=function(){
  document.getElementById("bir").style.backgroundColor="#f9ff52";
  document.getElementById("iki").style.background="none";
  document.getElementById("uc").style.background="none";
  document.getElementById("dort").style.background="none";
  document.getElementById("bes").style.background="none";
  document.querySelector(".emoji").src="images/emojis/crying-smiley.png";
  document.querySelector(".emoji").style.transform="rotate(360deg)";
}

document.getElementById("iki").onclick=function(){
  document.getElementById("bir").style.backgroundColor="#f9ff52";
  document.getElementById("iki").style.backgroundColor="#f9ff52";
  document.getElementById("uc").style.background="none";
  document.getElementById("dort").style.background="none";
  document.getElementById("bes").style.background="none";
  document.querySelector(".emoji").src="images/emojis/uncertain-smiley.png";
  document.querySelector(".emoji").style.transform="rotate(720deg)";
}

document.getElementById("uc").onclick=function(){
  document.getElementById("bir").style.backgroundColor="#f9ff52";
  document.getElementById("iki").style.backgroundColor="#f9ff52";
  document.getElementById("uc").style.backgroundColor="#f9ff52";
  document.getElementById("dort").style.background="none";
  document.getElementById("bes").style.background="none";
  document.querySelector(".emoji").src="images/emojis/kissy-smiley.png";
  document.querySelector(".emoji").style.transform="rotate(1080deg)";
}

document.getElementById("dort").onclick=function(){
  document.getElementById("bir").style.backgroundColor="#f9ff52";
  document.getElementById("iki").style.backgroundColor="#f9ff52";
  document.getElementById("uc").style.backgroundColor="#f9ff52";
  document.getElementById("dort").style.backgroundColor="#f9ff52";
  document.getElementById("bes").style.background="none";
  document.querySelector(".emoji").src="images/emojis/heart-eyes-smiley.png";
  document.querySelector(".emoji").style.transform="rotate(1440deg)";
}

document.getElementById("bes").onclick=function(){
  document.getElementById("bir").style.backgroundColor="#f9ff52";
  document.getElementById("iki").style.backgroundColor="#f9ff52";
  document.getElementById("uc").style.backgroundColor="#f9ff52";
  document.getElementById("dort").style.backgroundColor="#f9ff52";
  document.getElementById("bes").style.backgroundColor="#f9ff52";
  document.querySelector(".emoji").src="images/emojis/heart-emoji.png";
  document.querySelector(".emoji").style.transform="rotate(1800deg)";
}
