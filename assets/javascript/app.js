var time =20;
 var triviaQuestions = [
    {
        question: "What number does the Roman numeral &quot;D&quot; stand for?",  
        answers: {
                    a: "100",
                    b: "1000",
                    c: "50"
                    },
       correct_answer: "500"
                },
    {
        question: "Grant Gustin plays which superhero on the CW show of the same name?",
        answers: {
            a: "The Arrow",
           b: "Black Canary",
            c: "Daredevil"
        },
        correct_answer: "The Flash"
    },
    
{
    question: "In the game Destiny, who succeeded Peter Dinklage in voicing the protagonist&#039;s &quot;Ghost&quot;?",
    answers: {
    a: "John DiMaggio",
    b: "Mark Hamill",
    c: " Troy Baker"
    },
    correct_answer: "Nolan North"
},
    {   
        question: "What does &quot;LCD&quot; stand for?",
        answers: {
       a:"Language Control Design",
        b:"Last Common Difference",
        c:"Long Continuous Design"
        },
        correct_answer: "Liquid Crystal Display"
    },
    {
        question: "Which game is NOT part of the Science Adventure series by 5pb. and Nitroplus?",
        answers: {
            a: "Steins; Gate",
            b: "Robotics; Notes",
            c: "Chaos; Child"
        },
        correct_answer: "Occultic; Nine",
    }];
    console.log(triviaQuestions);
 var triviaBox = $("#trivia-questions");
 var outcomeBox = $("#outcome");
 function startTrivia(){    
 }
 function playTrivia(){
 $("#playbtn").on("click", function() {
     $("button").remove("#playbtn");
     createTrivia();
 });
 console.log();
 function createTrivia (){
     var output =[];
     triviaQuestions.forEach((currentQuestion, questionNumber) => {
             var answers = [];
             for (letter in currentQuestion.answers){
                 answers.push(
                     `<label>
                     <input type="radio" name="question${questionNumber}" value="${letter} > 
                     ${letter} :${currentQuestion.answers[letter]}
                     </label>` );
             }
             output.push(`<div class="question">${currentQuestion.question} </div>
             <div class="answers"> ${answers.join(' ')}</div>`);
            //  console.log(currentQuestion.answers);
            //  console.log(currentQuestion.question);
            // console.log(letter); //need a lok
         }
     );
     triviaBox.innerHTML = output.join('');
    //  console.log(createTrivia);
    // console.log(triviaBox.innerHTML);
 }
 setTimeout(timeCount, 1000 * 480);
 setTimeout(timeUp, 1000*480);
 function timeCount(){
     $("#timer").append("<p>Time Remaining:</p>");
     consolole.log(timeCount);
     time--;
     if (time === 0){
         clearInterval(intervalId);
     } else {

     }
     console.log(time);
 }

 function results (){
     var answerBox = triviaBox.querySelectorAll(".answers");
     var correctNum = 0;
     triviaQuestions.forEach((currentQuestion,questionNumber) => {
     var answerBox = answerBox[questionNumber];
     var chooser = `input[name=question${questionNumber}]: checked`;
     var userChoice = (answerBox.querySelector(chooser) || {}).value;
     if (userChoice === currentQuestion.correct_answer){
         correctNum++;
         answerBox[questionNumber].style.color = "yellow";
     } else {
         answerBox[questionNumber].style.color = "purple";
     }
    
     console.log();
 });
 console.log(chooser);
 outcomeBox.innerHTML = `${correctNum}  out of ${triviaQuestions.length}`;
 console.log();
}

 createTrivia();

//  function submit (){
//     var submitBtn = $("#submit");
//     for (var i=0;i<submitBtn.length;i++){
       
//         submitBtn[i].addEventListener("click", results);;
//     }
}