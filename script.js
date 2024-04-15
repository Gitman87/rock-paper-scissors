
//function for getting computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3) +1;
  
  return randomNumber;
}
// //player choice function
// function playerSelection(){
//   let choiceCorrected="";
  
//   do {
//   let choice = prompt("Type Rock, Paper or Scissors");
  
//   choiceCorrected = choice.toLowerCase();
  
//   } while(choiceCorrected !="rock"&& choiceCorrected != "paper" && choiceCorrected !="scissors");
 
//   switch(choiceCorrected){
//     case 'rock':
//       return 1;
//     case 'paper':
//       return 2;
//     case 'scissors':
//       return 3;
//     default:
//       console.log("Correct your answer!")
//   }
  
// }
//play round function
function playRound(playerSelection,computerSelection){
  // computerSelection = getComputerChoice();
  // playerSelection = playerSelection();
  if(playerSelection == 1 && computerSelection == 2){
    //computer wins
    console.log("You lose! Paper beats Rock");
    explain.textContent="You lose! Paper beats Rock";
    container.appendChild(explain);
    return 2;
  }
  else if ( playerSelection ==  1 && computerSelection == 3){
    // player wins
    console.log("You win! Rock beats Scissors");
    explain.textContent="You win! Rock beats Scissors";
    container.appendChild(explain);
    return 1;
  }
  else if ( playerSelection == 2 && computerSelection == 1){
    // player wins
    console.log("You win! Paper beats Rock");
    explain.textContent="You win! Paper beats Rock";
    container.appendChild(explain);
    return 1;
  }
  else if ( playerSelection == 2 && computerSelection == 3){
  //   computer wins
    console.log("You lose! Scissors beats Paper");
    explain.textContent="You lose! Scissors beats Paper";
    container.appendChild(explain);
    return 2;
   }
   else if (playerSelection ==3 && computerSelection == 1){
    // computer wins
    console.log("You lose! Rock beats Scissors");
    explain.textContent="You lose! Rock beats Scissors";
    container.appendChild(explain);
    return 2;
   }
   else if (playerSelection ==3 && computerSelection ==2){
    // player wins
    console.log("You win! Scissors  beats Paper");
    explain.textContent="You win! Scissors  beats Paper";
    container.appendChild(explain);
    return 1;
   }
   else {
    console.log("It's a tie!");
    explain.textContent="It's a tie!";
    container.appendChild(explain);
    return 0;
   }
  

}
// //round counter
// function playGame(){ 
//   let playerScore=0;
//   let compScore=0;
//   for(i=0; i<5; i++){
  
//   let compChoice = getComputerChoice();
//   let playChoice = playerSelection();
//   let result;
//   result = playRound(playChoice, compChoice);
//   if ( result === 1){
//     playerScore++;
//   }
//   else if (result === 2){
//     compScore++;
//   }
 
// }
// //compare scores
// if( playerScore > compScore){
//   console.log(`Congrats: You are the winner with score: ${playerScore} to ${playerScore}.`);
// }
// else if (playerScore < compScore){
//   console.log(`Congrats: You are the winner with score: ${compScore} to ${playerScore}.`)
// }
// else {
//   console.log(`It's a tie : ${playerScore} : ${playerScore}`);
// }
// }
//execute
console.log("Hello this is Rock Paper Scissors Game. We play 5 rounds. Good luck!");
const buttons= document.querySelectorAll(".choice");
let playerScore=0;
let compScore=0;
let numberRounds=0;
let result=0;
//selectors
const container = document.querySelector(".score-container");
const para = document.createElement("p");
para.classList.add("para-score");
para.textContent=`Player: ${playerScore} Comp:${compScore}`;
container.appendChild(para);
const explain=document.createElement("p");
explain.classList.add("para-explain-text");
explain.textContent="";
const verdict=document.createElement('p');
verdict.classList.add('verdict-para');
verdict.textContent='';



buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
    let comp=getComputerChoice();
    result = playRound(button.id, comp);
    console.log(button.id, comp);
    
    if ( result == 1){
      playerScore++;
      numberRounds++;
    }
    else if (result ==2){
      compScore++;
      numberRounds++;
    }
    else{
      playerScore++;
      compScore++;
      numberRounds++;
    }
    console.log(playerScore, compScore);
    para.textContent=`Player: ${playerScore} Comp:${compScore}`;
    container.appendChild(para);
    
    if (numberRounds>=5){
      if( playerScore > compScore){
        console.log(`Congrats: You are the winner with score: ${playerScore} to ${compScore}.`);
        verdict.textContent=`Congrats: You are the winner with score: ${playerScore} to ${compScore}.`
        container.appendChild(verdict);
        playerScore=0;
        compScore=0;
        numberRounds=0;
        result=0;
        // para.textContent=`Player: ${playerScore} Comp:${compScore}`;
        container.appendChild(para);

              }
      else if (playerScore < compScore){
        console.log(`You lose with score: ${playerScore} to ${compScore}.`);
        verdict.textContent=`You lose with score: ${playerScore} to ${compScore}.`
        container.appendChild(verdict);
        // para.textContent=`Player: ${playerScore} Comp:${compScore}`;
        playerScore=0;
        compScore=0;
        
        numberRounds=0;
        result=0;
        
        container.appendChild(para);
        
      }
      else{
        console.log(`It's a tie : ${playerScore} : ${compScore}`);
        verdict.textContent=`It's a tie : ${playerScore} : ${compScore}`;
        container.appendChild(verdict);
        // para.textContent=`Player: ${playerScore} Comp:${compScore}`;
        playerScore=0;
        compScore=0;
        numberRounds=0;
        result=0;
        
        container.appendChild(para);
        
      }
      

    }
    else{
      verdict.textContent='';
    }
    
    
   
  


  }
)
})
// playGame();