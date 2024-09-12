// Select the video element and control elements
const video = document.querySelector('.player__video');
const playerButton = document.querySelector('.player__button');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');
const volumeInput = document.querySelector('input[name="volume"]');
const playbackRateInput = document.querySelector('input[name="playbackRate"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Initialize video player settings
function initializePlayer() {
  video.volume = volumeInput.value;
  video.playbackRate = playbackRateInput.value;
  updateProgress();
}

// Function to handle play/pause toggle
function togglePlayPause() {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚'; // Pause icon
  } else {
    video.pause();
    playerButton.textContent = '►'; // Play icon
  }
}

// Function to rewind video by 10 seconds
function rewind() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

// Function to skip video by 25 seconds
function skip() {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

// Function to update volume
function updateVolume() {
  video.volume = volumeInput.value;
}

// Function to update playback speed
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

// Initialize the player with the desired settings
initializePlayer();
