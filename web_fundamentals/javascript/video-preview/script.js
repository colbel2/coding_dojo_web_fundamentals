console.log("page loaded...");

var video = document.getElementById('video');

function playVid(element) {
  video.play("mouseover");
}

function pauseVid(element) {
  video.pause("onmouseout");
}