document.querySelectorAll('.controls').forEach(controlDiv => {
    const videoId = controlDiv.getAttribute('data-video');
    const video = document.getElementById(videoId);
    const seekBar = controlDiv.querySelector('.seekBar');
    const currentTimeDisplay = controlDiv.querySelector('.currentTime');
    const durationDisplay = controlDiv.querySelector('.duration');

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return minutes + ':' + (sec < 10 ? '0' : '') + sec;
    }

    video.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(video.duration);
    });

    video.addEventListener('timeupdate', () => {
        seekBar.value = (video.currentTime / video.duration) * 100;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
    });

    seekBar.addEventListener('input', () => {
        const seekTo = video.duration * (seekBar.value / 100);
        video.currentTime = seekTo;
    });

    controlDiv.querySelector('.play').addEventListener('click', () => video.play());
    controlDiv.querySelector('.pause').addEventListener('click', () => video.pause());
    controlDiv.querySelector('.stop').addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
    });
    controlDiv.querySelector('.rewind20').addEventListener('click', () => video.currentTime -= 20);
    controlDiv.querySelector('.forward20').addEventListener('click', () => video.currentTime += 20);
    controlDiv.querySelector('.mute').addEventListener('click', () => video.muted = !video.muted);

    const volume = controlDiv.querySelector('.volume');
    volume.addEventListener('input', () => video.volume = volume.value);

    const speed = controlDiv.querySelector('.speed');
    speed.addEventListener('input', () => video.playbackRate = speed.value);

    controlDiv.querySelector('.fullscreen').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            video.requestFullscreen().catch(err => {
                alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});
