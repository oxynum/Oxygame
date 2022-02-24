let btnVideo = document.getElementsByClassName("teaserBtn notForIos");
let videoTeaser = document.getElementById("videoTeaser");
let theVideo = document.getElementById("theVideo");
var b = document.querySelector("button");
// btnVideo.onclick = showVideo();

function showVideo() {

    theVideo.setAttribute("controls", "");
    theVideo.removeAttribute("autoplay");
    theVideo.removeAttribute("muted");
    theVideo.removeAttribute("loop");
    theVideo.muted = false;
    // videoTeaser.style.opacity = 1;
    // videoTeaser.style.zIndex = 11;
    videoTeaser.style.height = "100vh";
    videoTeaser.style.width = "100vw";

    if (theVideo.requestFullscreen) {
        theVideo.requestFullscreen();
    }

}