// create Div for the Timer

var timer = document.createElement("DIV");
timer.setAttribute("id", "timer");
timer.innerHTML = '<time>00:00:00</time>';
timer.style.fontSize = "medium";
timer.style.color = "grey";

// Place Div after logo - wait for page to load
window.addEventListener ("load", myMain, false);

function myMain (evt) {
  var logo = document.getElementById('logo');
  console.log(logo);
  logo.after(timer);
}

// check if user changes URL
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'hello!') {
      console.log(request.url)
      clearTimeout(t);
    }
});

// select HTML5 video and check status of video player
var player = document.querySelector('video');

if(player.currentTime > 0 && !player.paused && !player.ended && player.readyState > 2) {
 timer1();
}

player.onplaying = function(){ timer1(); }
player.onpause = function() { clearTimeout(t); }
player.onending = function() { clearTimeout(t); }


/* check if Theater mode is enabled
if(ytd_watch_flexy.theater = true) {

}else if (ytd_watch_flexy.theater = false) {
  timer.style.color = "black";
}*/
//


//timer

var seconds = 0, minutes = 0, hours = 0, t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    timer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer1();
}
function timer1() {
    t = setTimeout(add, 1000);
}
