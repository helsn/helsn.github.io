function toggleSongs() {
    songsSecondHalf = document.getElementById("songs-second-half");
    songsSecondHalf.classList.toggle("hidden");
    return
}

document.getElementById("toggle-button").onclick = toggleSongs;