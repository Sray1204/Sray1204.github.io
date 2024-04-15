//setting playlist selection based on the mood points 
var happyCount = 0;
var sadCount = 0;
var angryCount = 0;
var chillCount = 0;

//getting playlist input
function handleButtonClick(mood){

    if(mood == 'happy'){
        happyCount += 1;
        alert(happyCount);
        nextQuestion();
    }
}

var questions = [
    "Sooo... how's the weather over there?",
    "Is there work or school today?",
    "You hanging out with anyone today?",
    "Have you completed the task you wanted to do, or are you procastinating right now?",
    "How's the bank account looking?",
    "Did they text back?",
    "Did something embarrassing happen to you in the past week?",
    "How's your week been?",
    " "
];

//will go through next question in list when the function is called
function nextQuestion(){

    //loops over the questions list 
    //redirects to page with playlist based on mood points
    //will write over the first question
    document.getElementById("questions").innerHTML = questions[1];

}

//need function if button clicked to move or push to the next question

