//global Variables 
let musicPlaying = false;
var audio = new Audio();
var songsIndex = 0;

//json data will be put into these empty array's
let playlistTitle;
let songImg = [];
let songName = [];
let artist = [];
let path = [];
let songs = [];

//extract information from json file 
//display first song details once added
// Execute this code when the window is loaded
window.onload = function() {
    // Get the stored playlistId from local storage
    const playlistId = localStorage.getItem('playlistId');

    // Fetch playlist data from JSON file
    fetch('playlists.json')
        .then(response => response.json())
        .then(data => {
            // Find the playlist that matches the stored playlistId
            const playlist = data.playlists.find(playlist => playlist.id == playlistId);

            // Check if playlist with the stored ID is found
            if (playlist) {
                // Assign the playlist title to the playlistTitle variable
                playlistTitle = playlist.title;

                // Extract songs from the playlist and add them to the arrays
                playlist.songs.forEach(song => {
                    songImg.push(song.image);
                    songName.push(song.name);
                    artist.push(song.artist);
                    path.push(song.path);
                });

                // Display the first song details once added
                if (songsIndex == 0) {
                    document.getElementById("playlist-name").innerHTML = playlistTitle;
                    document.getElementById("song-name").innerHTML = songName[songsIndex];
                    document.getElementById("artist").innerHTML = artist[songsIndex];
                    const display_album_cover = document.querySelector(".album-cover");
                    display_album_cover.src = songImg[songsIndex];
                    
                    
                }
            } else {
                console.error('Playlist with ID', playlistId, 'not found.');
            }
        })
        .catch(error => console.error('Error fetching playlist data:', error));
};

//Media controls button functions 

function skipSongFrwd(){
    pauseMusic();
    songsIndex = Math.min(path.length - 1, songsIndex + 1);
    audio.src = path[songsIndex];
    playMusic();
    //call changeSongDetails() after
    changeSongDetails()
}

function skipSongBack() {
    pauseMusic();
    //Check if songsIndex is greater than 0 before decrementing
    if (songsIndex > 0) {
        songsIndex -= 1;
    } else {
        songsIndex = 0; // Set songsIndex to 0 if it's already at 0
    }
    audio.src = path[songsIndex];
    playMusic();
    changeSongDetails();
}


// Play function
//Will play current song index
function playMusic() {
    // Toggle musicPlaying status
    musicPlaying = !musicPlaying;

    //this will play the current index in the songs playlist 
    audio.src = path[songsIndex];

    if(musicPlaying == true){
        audio.play();
    }
}

//might need to make just one play pause button as it does not continue the song when being played
function pauseMusic(){
    //toggle music off
    musicPlaying = !musicPlaying;

    if(musicPlaying == false && path){
        audio.pause();
    }

}

function changeSongDetails(){
    //checks the songindex and displays song name
    document.getElementById("song-name").innerHTML = songName[songsIndex];
    document.getElementById("artist").innerHTML = artist[songsIndex];
    const display_album_cover = document.querySelector(".album-cover");
    display_album_cover.src = songImg[songsIndex];
}

