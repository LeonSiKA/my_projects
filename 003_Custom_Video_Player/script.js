const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

//Play & pause video
function toggleVideoStatus() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }  
}
// update play/pause icon
function updatePlayIcon() {
  if(video.paused){
    play.innerHTML = '<i class="fa fa-play fa-2x"><i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// update progress & timestamp
function updateProgress() {
  return true;
}

//Set video time to progress
function setVideoProgress() {
  return true;
}

// Stop video
// as we push the stop buttom it will stop the videos on beginning
function stopVideo() {
  video.currentTime=0;
  video.pause();
}

//Event Listeners
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
