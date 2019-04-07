var currentQuestion=1;
var score=0;
var totQuestion=questions.length;

var container=document.getElementById('quizContainer');
var questionEl=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var nextButton=document.getElementById('nextButton');
var resultCont=document.getElementById('result');
var buttback=document.getElementById('back');



function loadQuestion(questionIndex){
    var q=questions[questionIndex];

    container.classList.add("fadeOut");
    container.classList.add("animated");
        setTimeout(function () {
        container.classList.remove("fadeOut");
        container.classList.add("fadeIn");
        questionEl.textContent=(questionIndex+ 1)+'-' +q.question;
        opt1.textContent=q.option1;
        opt2.textContent=q.option2;
        opt3.textContent=q.option3;
        opt4.textContent=q.option4;
    },1000);

    setTimeout(function () {
        container.classList.remove("fadeOut");
        container.classList.add("fadeIn");
    },1000);


}

function loadNextQuestion(){
    var selectedOption=document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer=selectedOption.value;

    if(questions[currentQuestion].answer==answer){
        score+=1;
    }
    selectedOption.checked=false;
    currentQuestion++;



    if(currentQuestion==totQuestion-1){
        nextButton.textContent='Finish';
    }
    if(currentQuestion==totQuestion){
        container.style.display='none';
        resultCont.style.display='';
        resultCont.textContent='Your Score:' +score;
        buttback.style.display='block';
        return;
    }

    loadQuestion(currentQuestion);


}

