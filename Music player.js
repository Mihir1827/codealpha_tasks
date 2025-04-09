const musicList = [
    { title: "Song 1", src: "path/to/song1.mp3" },
    { title: "Song 2", src: "path/to/song2.mp3" },
    { title: "Song 3", src: "path/to/song3.mp3" },
];

let currentTrackIndex = 0;
let audio = new Audio(musicList[currentTrackIndex].src);

const musicListElement = document.getElementById('music-list');
const currentTrackElement = document.getElementById('current-track');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const skipButton = document.getElementById('skip');
const volumeControl = document.getElementById('volume');
const searchInput = document.getElementById('search');

// Function to render music list
function renderMusicList() {
    musicListElement.innerHTML = '';
    musicList.forEach((track, index) => {
        const div = document.createElement('div');
        div.className = 'music-item';
        div.textContent = track.title;
        div.onclick = () => playTrack(index);
        musicListElement.appendChild(div);
    });
}

// Function to play a track
function playTrack(index) {
    if (audio) {
        audio.pause();
    }
    currentTrackIndex = index;
    audio = new Audio(musicList[currentTrackIndex].src);
    audio.play();
    currentTrackElement.textContent = `Now Playing: ${musicList[currentTrackIndex].title}`;
}

// Play button functionality
playButton.onclick = () => {
    audio.play();
};

// Pause button functionality
pauseButton.onclick = () => {
    audio.pause();
};

// Skip button functionality
skipButton.onclick = () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    playTrack(currentTrackIndex);
};

// Volume control functionality
volumeControl.oninput = (e) => {
    audio.volume = e.target.value;
};

// Search functionality
searchInput.oninput = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMusicList = musicList.filter(track => track.title.toLowerCase().includes(searchTerm));
    musicListElement.innerHTML = '';
    filteredMusicList.for