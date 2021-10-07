// declare audio file variables
const playBoom = new Audio("assets/sounds/boom.wav");
const playClap = new Audio("assets/sounds/clap.wav");
const playHihat = new Audio("assets/sounds/hihat.wav");
const playKick = new Audio("assets/sounds/kick.wav");
const playOpenhat = new Audio("assets/sounds/openhat.wav");
const playRide = new Audio("assets/sounds/ride.wav");
const playSnare = new Audio("assets/sounds/snare.wav");
const playTink = new Audio("assets/sounds/tink.wav");
const playTom = new Audio("assets/sounds/tom.wav");

//declare button variables
const clickBoom = document.getElementById("A");
const clickClap = document.getElementById("S");
const clickHihat = document.getElementById("D");
const clickKick = document.getElementById("F");
const clickOpenhat = document.getElementById("G");
const clickRide = document.getElementById("H");
const clickSnare = document.getElementById("J");
const clickTink = document.getElementById("K");
const clickTom = document.getElementById("L");

// key press listener and function switch
document.addEventListener("keypress", function(event) {
  soundKey(event.key);
});

function soundKey (key) {
switch(key){
case "a":
case "A":
playBoom.pause()
playBoom.currentTime = 0
playBoom.play();
  break;
case "s":
case "S":
playClap.pause()
playClap.currentTime = 0
playClap.play();
  break;
case "d":
case "D":
playHihat.pause()
playHihat.currentTime = 0
playHihat.play();
  break;
case "f":
case "F":
playKick.pause()
playKick.currentTime = 0
playKick.play();
    break;
case "g":
case "G":
playOpenhat.pause()
playOpenhat.currentTime = 0
playOpenhat.play();
    break;
case "h":
case "H":
playRide.pause()
playRide.currentTime = 0
playRide.play();
    break;
case "j":
case "J":
playSnare.pause()
playSnare.currentTime = 0
playSnare.play();
    break;
case "k":
case "K":
playTink.pause()
playTink.currentTime = 0
playTink.play();
    break;
case "l":
case "L":
playTom.pause()
playTom.currentTime = 0
playTom.play();
    break;
}
}

// click listener and function switch - not working.
document.addEventListener("click", function(event) {
  soundClick(event.click);
});

function soundClick (event) {
switch(event){
case clickBoom:
playBoom.pause()
playBoom.currentTime = 0
playBoom.play();
  break;
case clickClap:
playClap.pause()
playClap.currentTime = 0
playClap.play();
  break;
case clickHihat:
playHihat.pause()
playHihat.currentTime = 0
playHihat.play();
  break;
case clickKick:
playKick.pause()
playKick.currentTime = 0
playKick.play();
    break;
case clickOpenhat:
playOpenhat.pause()
playOpenhat.currentTime = 0
playOpenhat.play();
    break;
case clickRide:
playRide.pause()
playRide.currentTime = 0
playRide.play();
    break;
case clickSnare:
playSnare.pause()
playSnare.currentTime = 0
playSnare.play();
    break;
case clickTink:
playTink.pause()
playTink.currentTime = 0
playTink.play();
    break;
case clickTom:
playTom.pause()
playTom.currentTime = 0
playTom.play();
    break;
}
}
