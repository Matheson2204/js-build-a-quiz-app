/* ***************************
  JWD JavaScript Assessment
  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and your own code, to finish the app. 
  
  The tasks you need to do are below.
    TASKS TODO:
      1. Add 2 more questions to the app (each question must have 4 options). 
      2. Calculate the score as the total of the number of correct answers
      3. Add an Event listener for the submit button, which will display the score and highlight the correct answers when the button is clicked. Study the code in the function calculateScore() to help you.
      4. Reload the page when the reset button is clicked (hint: search window.location)
      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector("#start");
  start.addEventListener("click", function (e) {
    document.querySelector("#quizBlock").style.display = "block";
    start.style.display = "none";
    startTimer();
    
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: "Which is the third planet from the sun?",
      o: ["Saturn", "Earth", "Pluto", "Mars"],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: "Which is the largest ocean on Earth?",
      o: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      a: 3,
    },
    {
      q: "What is the capital of Australia?",
      o: ["Sydney", "Canberra", "Melbourne", "Perth"],
      a: 1,
    },
    {
      q: "Which US State is Las Vegas located?",
      o: ["Michigan", "Georgia", "Nevada", "Arizona"],
      a: 2,
    },
    {
      q: "Which is not a European Country?",
      o: ["Russia", "France", "Norway", "Algeria"],
      a: 3,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector("#quizWrap");
    let quizDisplay = "";
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3">${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };


//function to submit form
const subBtn = document.querySelector('#btnSubmit');
subBtn.addEventListener("click", () => calculateScore());
  
  
   
   
  // reset function
  const resetBtn = document.querySelector('#btnReset');
  resetBtn.addEventListener("click", () => {
    location.reload()
  })
  
  

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector("#" + li);
        radioElement = document.querySelector("#" + r);
      
        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = 'green'
        };

        if (radioElement.checked)  {
         console.log(quizItem.o[i])
          if(radioElement.checked && quizItem.a == i) {
             score+=10
          }
        }
      }
  document.getElementById("score").innerHTML = `Your score is ${score}`;
    });
    
  }
  document.getElementById('time').innerHTML =
  01 + ":" + 01;
  
  let timerStop = false;
  function startTimer() { 
    var presentTime = document.getElementById('time').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = (checkSecond((timeArray[1] - 1)));
    if (s == '00' && timerStop) {
      calculateScore()
      console.log("Done") 
    }
    if(s==59){m=m-1}
    if(m<0){
      return 
    } 
    timerStop = true;  
    document.getElementById('time').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1000);
    
  }
  
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec};
    if (sec < 0) {sec = "59"};
    return sec;
  }
  
   
  // call the displayQuiz function
 displayQuiz();
});
 
