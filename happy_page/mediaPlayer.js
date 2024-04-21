//can make all the playlist in one js script based on lists ? and store in seperate files ?
//same with playlist titles - will need better data structures however...json files?

//global Variables 
let musicPlaying = false;
let songs = ["Dominic Fike - How Much Is Weed.mp3", "Lil Yachty - Drive ME CRAZY.mp3"]
//make list of album cover img
var audio = new Audio();
var songsIndex = 0;

//display first song name of list when loaded in 
window.onload = function() {
    if(songsIndex == 0){
    document.getElementById("song-name").innerHTML = songs[songsIndex];
}
}

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