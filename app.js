var computerchoicedisplay= document.getElementById("computer");
var userchoicedisplay = document.getElementById("myself");
var outputdisplay = document.getElementById("result");
var combination = document.querySelectorAll("button");
var countscore = document.getElementById("score-board");
var userChoice
var computerChoice
var getresult


combination.forEach(function (button) {
   button.addEventListener("click", function(e) {
      userChoice = e.target.id;
      userchoicedisplay.innerHTML = userChoice
      getcomputerChoice()
      getresult()

//to generate computer choice 


      function getcomputerChoice() {
   const togetnumber = parseInt(Math.random()*3)+1;
   if (togetnumber===1) {
      computerChoice="rock";
   } else if(togetnumber===2){
      computerChoice="paper";
   }else{
      computerChoice="scissor";
   }
   computerchoicedisplay.innerHTML = computerChoice;
}


//result section for final output

function getresult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you loose!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you loose!'
  }
  outputdisplay.innerHTML = result;
}
  }) 
})






