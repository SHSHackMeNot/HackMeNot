function changeLock(){
  document.getElementById("enterLockImg").src = "Assets/padlock-unlock.png";
  setTimeout(toMainPage, 1000);
}

function toMainPage(){
  location.href = "mainScreen.html";
}
