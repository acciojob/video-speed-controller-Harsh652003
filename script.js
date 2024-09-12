// Select the video element and control elements
const video = document.querySelector('.viewer');
const playerButton = document.querySelector('.player__button');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');
const volumeInput = document.querySelector('input[name="volume"]');
const playbackRateInput = document.querySelector('input[name="playbackRate"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Initialize video player settings
function initializePlayer() {
  // Set initial volume and playback speed
  video.volume = volumeInput.value;
  video.playbackRate = playbackRateInput.value;
  
  // Set initial progress bar width to 50%
  progressFilled.style.width = '50%';
}


function togglePlayPause() {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚'; 
  } else {
    video.pause();
    playerButton.textContent = '►';
  }
}


function rewind() {
  video.currentTime -= 10;
}


function skip() {
  video.currentTime += 25;
}


function updateVolume() {
  video.volume = volumeInput.value;
}


function updatePlaybackRate() {
  video.playbackRate = playbackRateInput.value;
}

// Function to update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Event listeners
playerButton.addEventListener('click', togglePlayPause);
rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', skip);
volumeInput.addEventListener('input', updateVolume);
playbackRateInput.addEventListener('input', updatePlaybackRate);
video.addEventListener('timeupdate', updateProgress);


initializePlayer();
