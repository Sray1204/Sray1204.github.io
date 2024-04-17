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
    else if(mood == 'sad'){
        sadCount += 1;
        alert(happyCount);
        nextQuestion();
    }
    else if(mood == 'angry'){
        angryCount += 1;
        alert(happyCount);
        nextQuestion();
    }
    else if(mood == 'chill'){
        chillCount += 1;
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

// Function to display the next question
function nextQuestion() {
    //Checks there are more than one question in the array
    if (questions.length > 1) {
        //Writes over the current question and push it out of the array
        document.getElementById("questions").innerHTML = questions.shift();
    } else {
        //Redirects you to playlisg based on mood points
        //calculate mood points
        alert("No more questions!");
    }
}
    

