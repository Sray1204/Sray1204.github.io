//setting playlist selection based on the mood points 
var happyCount = 0;
var sadCount = 0;
var angryCount = 0;
var chillCount = 0;

//keeps track of how many questions that have been answered
var questionIndex = 0;

//list of questions to answer to get user mood points
var questions = [
    "Sooo... how's the weather over there?",
    "How you feeling about work or school right now?",
    "Did the plans make it out the groupchat this week?",
    "Have you completed the task you wanted to do, or are you procastinating right now?",
    "How's the bank account looking?",
    "Did they text back?",
    "Is it a good hair day?",
    "Did you have to interact with THAT person?",
    "Did you eat good today?",
    "How was the sleep?...or lack thereof"
];

//getting playlist input
function handleButtonClick(mood){

    if(mood == 'happy'){
        happyCount += 1;
        questionIndex += 1;
        nextQuestion();
    }
    else if(mood == 'sad'){
        sadCount += 1;
        questionIndex += 1;
        nextQuestion();
    }
    else if(mood == 'angry'){
        angryCount += 1;
        questionIndex += 1;
        nextQuestion();
    }
    else if(mood == 'chill'){
        chillCount += 1;
        questionIndex += 1;
        nextQuestion();
    }
}

// Function to display the next question
function nextQuestion() {
    //Checks there are more than one question in the array
    if (questions.length > 1) {
        //Writes over the current question and push it out of the array
        document.getElementById("questions").innerHTML = questions.shift();

    } else if(questionIndex == 10){
        //alert("questions done");
        calculateMoodPoints();
    }
}

//localStorage.setItem() then getitem in media player script 
//will direct to playlist and store the playlist number/ id through the website and then be read and will choose the playlist in the mediaplayer script 
function calculateMoodPoints() {
    let storeId;

    // Check for mood combinations
    if (chillCount > 2 && happyCount > 2) {
        storeId = 5;
    } else if (sadCount > 3 && angryCount > 2) {
        storeId = 6;
    } 
    else {
        // Check individual mood counts
        if (happyCount > 4) {
            storeId = 2;
        } else if (sadCount > 4) {
            storeId = 3;
        } else if (angryCount > 4) {
            storeId = 4;
        } else if (chillCount > 4) {
            storeId = 1;
        } else {
            // Default storeId if none of the conditions are met
            storeId = 1;
        }
    }

    // Store the playlist ID in local storage
    localStorage.setItem('playlistId', storeId);

    // Redirect to the corresponding playlist page
    window.location.replace("playlist-page/playlist-page.html");
}




