function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    if (numCorrect > 8) {
      alert("Eco-friendly grade: A+ You are on the right path in becoming more green! Keep up the good work.");
    }
    if (numCorrect > 6 && numCorrect < 8){
      alert("Eco-friendly grade: B Good try, look through the website one more time to refresh your mind on any parts that you forgot!");
    }
    if (numCorrect<6){
      alert("Eco-friendly grade: F Try again! Make sure to look at the tips we provide you, pay attention to the small details!");
    }
  }

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      question: "1) Which item below can be recycled, based on size?",
      answers: {
        a: "Plastic cutlery",
        b: "Bottle caps",
        c: "Coffee pods",
        d: "Plastic bottle with cap on"
      },
      correctAnswer: "d"
    },
    {
      question: "2) Which can you not use for composting?",
      answers: {
        a: "Plastic bottle",
        b: "Bannana peel",
        c: "Strawberries",
        d: "Old rice",
      },
      correctAnswer: "a"
    },
    {
      question: "3) What type of lighting should you not use at home?",
      answers: {
        a: "Natural lighting",
        b: "Compact fluorescent lights (CFLs)",
        c: "Incandescent lightbulbs",
        d: "LED Lightbulbs"
      },
      correctAnswer: "c"
    },
    {
      question: "4) When preparing food which of the following should you do?",
      answers: {
        a: "Leave old ingredients in the fridge to rot",
        b: "Take into account portion size",
        c: "Use machine packed produce",
        d: "Cook as much as possible"
      },
      correctAnswer: "b"
    },
    {
      question: "5) Which of the following is true?",
      answers: {
        a: "Walking emits carbon",
        b: "Driving is the most eco-friendly way to commute to work",
        c: "Carpooling is inefficient",
        d: "Biking and walking are great alternatives to cars"
      },
      correctAnswer: "d"
    },
    {
      question: "6) How can you reduce your carbon emission?",
      answers: {
        a: "Leave the facuet running",
        b: "Waste electricty",
        c: "Drive everywhere you go",
        d: "Walk and bike"
      },
      correctAnswer: "d"
    },
    {
      question: "7) What is the greenhouse effect?",
      answers: {
        a: "A way to plant food",
        b: "Good way to create energy",
        c: "Great way to cooke steak",
        d: "Process on earth that keeps earth warm"
      },
      correctAnswer: "d"
    },
    {
      question: "8) How should you throw away batteries?",
      answers: {
        a: "Recycle them with plastics",
        b: "Recycle them with metals",
        c: "Either recycle them with plastics or metals",
        d: "Put them in regular trash"
      },
      correctAnswer: "d"
    },
    {
      question: "9) What should you do to save energy?",
      answers: {
        a: "Leave the cold water running to cool the room",
        b: "Use a fan instead of air conditioner",
        c: "Make better use of natural light",
        d: "Use fire as a light source"
      },
      correctAnswer: "c"
    },
    {
      question: "10) What is a benefit of reducing the amount of water you use?",
      answers: {
        a: "Lower water bills and lower use of power",
        b: "Higher water bills",
        c: "More cold water",
        d: "Higher water pressure"
      },
      correctAnswer: "a"
    }
  ];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);