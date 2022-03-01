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

const form = document.getElementById("theFormOxyclash");
const formInputs = document.getElementById("theFormOxyclash").elements;
// var axios = require('axios');

// var qs = require('qs');

form.addEventListener("submit", (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", formInputs[0].value);
    urlencoded.append("gamerTag", formInputs[1].value);
    urlencoded.append("eMail", formInputs[2].value);
    urlencoded.append("dateOdBirth", formInputs[3].value);
    urlencoded.append("validated", "false");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("http://localhost:80/sub", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
})