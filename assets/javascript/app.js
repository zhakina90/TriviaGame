function timerDom (){
    time = 115;
    interval = setInterval(leftTime, 1000);
    $(".time-container").append("<div class ='time-left'></div>");
}

function leftTime(){
    time--;
    $("#time-counter").text(time);
    if (time === 0){
        clearInterval(interval);
    }}
function check(){
    var question1 = document.trivia.question1.value;
    var question2 = document.trivia.question2.value;
    var question3 = document.trivia.question3.value;
    var question4 = document.trivia.question4.value;
    var question5 = document.trivia.question5.value;
    var correctAnswer = 0;
    if (question1 == "The Flash") {
        correctAnswer++;
    }
    if (question2 == "Nolan North") {
        correctAnswer++;
    }
    if (question3 == "500") {
        correctAnswer++;
    }
    if (question4 == "Liquid Crystal Display") {
        correctAnswer++;
    }
    if (question5 == "Occultic; Nine") {
        correctAnswer++;
    }
    var feedback = ["GreatJob!!!", "Next Time Do Better!", "Hope to See You Soon!"];
    var score;
    if (correctAnswer < 1) {
     score = 2
    }
    if (correctAnswer >5) {
        score = 0;

    }
    if (correctAnswer > 0 && correctAnswer<3) {
        score = 1;
    }
document.getElementById("submit").style.visibility = "visible";
clearInterval(interval);
document.getElementById("feedback").innerHTML = feedback[score];
document.getElementById("correct-number").innerHTML = "You got " + correctAnswer + " correct answers";
}
timerDom();