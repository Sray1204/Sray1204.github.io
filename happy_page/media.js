
function playMusic(){
    //add flags true and flase to stop and play music
    var music = new Audio('Dominic Fike - How Much Is Weed.mp3');
    music.play();

    button.addEventListener('click', () => {
        music.pause()
    });
}