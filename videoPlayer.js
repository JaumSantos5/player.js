document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playPauseBtnCenter = document.getElementById("playPauseBtnCenter");
    const rewindBtn = document.getElementById("rewindBtn");
    const forwardBtn = document.getElementById("forwardBtn");
    const progressBar = document.getElementById("progressBar");
    const currentTimeSpan = document.getElementById("currentTime");
    const durationSpan = document.getElementById("duration");
    const volumeBtn = document.getElementById("volumeBtn");
    const volumeSlider = document.getElementById("volumeSlider");
  
    playPauseBtn.addEventListener("click", togglePlayPause);
    playPauseBtnCenter.addEventListener("click", togglePlayPause);
    rewindBtn.addEventListener("click", rewind10s);
    forwardBtn.addEventListener("click", forward10s);
    progressBar.addEventListener("input", updateProgressBar);
    video.addEventListener("timeupdate", updateCurrentTime);
    video.addEventListener("durationchange", updateDuration);
    video.addEventListener("ended", handleVideoEnd);
    volumeBtn.addEventListener("mouseenter", showVolumeSlider);
    volumeBtn.addEventListener("mouseleave", hideVolumeSlider);
    volumeSlider.addEventListener("input", updateVolume);
    video.addEventListener("volumechange", updateVolumeIcon);
  

    document.getElementById("video-container").addEventListener("mouseenter", showPlayPauseCenter);
    document.getElementById("video-container").addEventListener("mouseleave", hidePlayPauseCenter);
  
    function togglePlayPause() {
      if (video.paused) {
        video.play();
        playPauseBtn.textContent = "⏸";
        playPauseBtnCenter.textContent = "⏸";
      } else {
        video.pause();
        playPauseBtn.textContent = "▶️";
        playPauseBtnCenter.textContent = "▶️";
      }
    }
  
    function showPlayPauseCenter() {
      playPauseBtnCenter.style.display = "block";
    }
  
    function hidePlayPauseCenter() {
      playPauseBtnCenter.style.display = "none";
    }
  
    function rewind10s() {
      video.currentTime -= 10;
    }
  
    function forward10s() {
      video.currentTime += 10;
    }
  
    function updateProgressBar() {
      const progressValue = progressBar.value * 0.01;
      video.currentTime = progressValue * video.duration;
    }
  
    function updateCurrentTime() {
      const minutes = Math.floor(video.currentTime / 60);
      const seconds = Math.floor(video.currentTime % 60);
      currentTimeSpan.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
  
      progressBar.value = (video.currentTime / video.duration) * 100;
    }
  
    function updateDuration() {
      const minutes = Math.floor(video.duration / 60);
      const seconds = Math.floor(video.duration % 60);
      durationSpan.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
    }
  
    function handleVideoEnd() {
      playPauseBtn.textContent = "▶️";
      playPauseBtnCenter.textContent = "▶️";
    }
  
    function showVolumeSlider() {
      volumeSlider.style.display = "inline-block";
    }
  
    function hideVolumeSlider() {
      setTimeout(() => {
        volumeSlider.style.display = "none";
      }, 2000); 
    }
  
    function updateVolume() {
      const volumeValue = volumeSlider.value * 0.01;
      video.volume = volumeValue;
    }
  
    function updateVolumeIcon() {
      volumeBtn.textContent = video.muted ? "🔇" : "🔊";
    }
  
    function padZero(value) {
      return value < 10 ? `0${value}` : value;
    }
  });