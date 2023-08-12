
    let currentAudio = null;
    let currentButton = null;

    function toggleAudio(audioId, button) {
        const audio = document.getElementById(audioId);
        
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Kembalikan durasi ke awal
            currentButton.innerHTML = '<i class="fas fa-play"></i>';
        }
        
        if (audio.paused) {
            audio.play();
            button.innerHTML = '<i class="fas fa-pause"></i>';
            currentAudio = audio;
            currentButton = button;
        } else {
            audio.pause();
            button.innerHTML = '<i class="fas fa-play"></i>';
            currentAudio = null;
            currentButton = null;
        }
        
        audio.addEventListener("ended", function() {
            button.innerHTML = '<i class="fas fa-play"></i>';
            currentAudio = null;
            currentButton = null;
        });
    }