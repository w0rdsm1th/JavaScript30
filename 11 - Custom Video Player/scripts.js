// var jQueryScript = document.createElement('script');
// jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
// document.head.appendChild(jQueryScript);

// TODO - consider how to use a design pattern to encapsulate the scripts

/*
* styling the default video player
* - hiding the controls by default
* - scrubber to control the play speed
* - skip buttons for 10 and 25s
* */

/*
* CSS already done
* specific divs
* transition the divs up/down if hover over the player
* */

/* Get our elements onto the page */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('#fullscreen');  // selecting by class, could select by id

/* build out the functions */
function togglePlay() {
    // 2 possible ways of coding up

    // ternerary operator to determine video status and then toggle 
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    // alternative to the ternary
    // if (video.paused) {  // .paused a property of video, there is no 'playing' function.
    //     video.play();
    // } else {
    //     video.pause();
    // }

}

// updating the playButton, there's a couple ways of playing/pausing the video, 
// **want the button to change on all of them** 
function updatePlayButton() {
    playButton.textContent = this.paused ? '►' : '❚❚';
}

// skip buttons
// data-skip contains 
function skipSeconds() {
    // this.dataset has the "skip" value to go forward/back
    // console.log(this.dataset);

    // first attempt - 
    // console.log(video.currentTime);
    // video.currentTime += this.dataset['skip'];

    // corrected - just needed to parse!!
    video.currentTime += parseFloat(this.dataset['skip']);
}

function handleRangeSliderUpdate() {
    // 
    // console.log(this.name);
    // console.log(this.value);

    // the properties going to change
    // video['volume']
    // video['playbackRate']
    video[this.name] = this.value;

}

function handleProgressBar(){
    // flex-basis value of progressBar
    // progressBar.flex-basis =
    // console.log('updating progressbar');
    const progressPct = (video.currentTime / video.duration) * 100;
    // LEARNING: wihtout the % suffix then doesn't know the units to use.......
    progressBar.style.flexBasis = `${progressPct}%`;
}

function scrubByClick(e) {
    // console.log(e);
    // event = MouseEvent with a positional offset
    // event.offset is the click offset INTO the progress bar
    // progress.offsetX is the total bar width
    const scrubTime = (e.offsetX / this.offsetWidth) * video.duration;
    console.log(scrubTime);
    video.currentTime = parseFloat(scrubTime);
}

// function toggleFullScreen(){
//     // console.log('attempting fullscreen toggle');
// //    check if video IS already fullscreen -> then go to 
// //    else go to full screen
//
//     // todo - use classList.toggle()
//     video.requestFullscreen();
//     // if (player.classList.contains('fullscreen')) {
//     //     player.classList.remove('fullscreen');
//     //     // player.style.display = 'fullscreen'
//     // }
//     // else {
//     //     player.classList.add('fullscreen');
//     // }
// }

// mozilla API guide: fullscreenElement on document, request on the element
// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            video.exitFullscreen();
        }
    }
}

/* hook up the event listenders */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', handleProgressBar);  // similar to event 'progress' that video emits
// Wes thinks basically indistinguishable events 

// listener to make the playButton togglePlay
playButton.addEventListener('click', togglePlay);

// listener to make the skip buttons go forward/back N seconds
skipButtons.forEach(button => button.addEventListener('click', skipSeconds))

// control the volume and playbackRate: line up with properties on the video
ranges.forEach(slider => slider.addEventListener('change', handleRangeSliderUpdate))

// single click on the progress bar
progress.addEventListener('click', scrubByClick);

// dragging and dropping along the progressbar
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && scrubByClick(e));

// fullScreenButton.addEventListener('click', toggleFullScreen);
$('#fullscreen').click(toggleFullScreen)
