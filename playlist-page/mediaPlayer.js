//global Variables 
let musicPlaying = false;
var audio = new Audio();
var songsIndex = 0;

//json data will be put into these empty array's
let songImg = [];
let songName = [];
let artist = [];
let path = [];
let songs = [];

//extract information from json file 
//display first song deatails once added
// Execute this code when the window is loaded
window.onload = function() {
    // Get the storeId from localStorage
    let storeId = localStorage.getItem('playlistId');

    // Fetch playlist data from JSON file
    fetch('playlists.json')
        .then(response => response.json())
        .then(data => {
            // Iterate over each playlist in the JSON data
            data.playlists.forEach(playlist => {
                // Iterate over each song in the playlist
                playlist.songs.forEach(song => {
                    // Push the song details into the respective arrays
                    songImg.push(song.image);
                    songName.push(song.name);
                    artist.push(song.artist);
                    path.push(song.path);
                });
            });

            // Display the first song details once added
            if (songsIndex == 0) {
                document.getElementById("song-name").innerHTML = songName[songsIndex];
            }
        })
        .catch(error => console.error('Error fetching playlist data:', error));

        document.getElementById("myElement").classList.add("myClass")

};

function skipSongFrwd(){
    pauseMusic();
    songsIndex = Math.min(songs.length - 1, songsIndex + 1);
    audio.src = songs[songsIndex];
    playMusic();
    //call changeSongDetails() after
    changeSongDetails()
}

function skipSongBack(){
    pauseMusic();
    songsIndex -= 1;
    //make sure it will not change if the list is less than 0
    audio.src = songs[songsIndex];
    playMusic();
    changeSongDetails()
}

// Play function
//needs to play current song index
function playMusic() {
    // Toggle musicPlaying status
    musicPlaying = !musicPlaying;

    //this will play the current index in the songs playlist 
    audio.src = songs[songsIndex];

    if(musicPlaying == true){
        audio.play();
    }
}

//might need to make just one play pause button as it does not continue the song when being played
function pauseMusic(){
    //toggle music off
    musicPlaying = !musicPlaying;

    if(musicPlaying == false && songs){
        audio.pause();
    }

}

function changeSongDetails(){
    //change the album cover to match the song
    //change the song name when skipped 
    document.getElementById("song-name").innerHTML = songs[songsIndex];
    //checks the songindex and displays song name
    
}

