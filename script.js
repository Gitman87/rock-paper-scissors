
//function for getting computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3) +1;
  
  return randomNumber;
}
//player choice function
function playerSelection(){
  let choiceCorrected="";
  
  do {
  let choice = prompt("Type Rock, Paper or Scissors");
  
  choiceCorrected = choice.toLowerCase();
  
  } while(choiceCorrected !="rock"&& choiceCorrected != "paper" && choiceCorrected !="scissors");
 
  switch(choiceCorrected){
    case 'rock':
      return 1;
    case 'paper':
      return 2;
    case 'scissors':
      return 3;
    default:
      console.log("Correct your answer!")
  }
  
}
//play round function
function playRound(playerSelection,computerSelection){
  // computerSelection = getComputerChoice();
  // playerSelection = playerSelection();
  if(playerSelection === 1 && computerSelection === 2){
    //computer wins
    console.log("You lose! Paper beats Rock")
    return 2;
  }
  else if ( playerSelection ===  1 && computerSelection === 3){
    // player wins
    console.log("You win! Rock beats Scissors")
    return 1;
  }
  else if ( playerSelection === 2 && computerSelection === 1){
    // player wins
    console.log("You win! Paper beats Rock")
    return 1;
  }
  else if ( playerSelection === 2 && computerSelection === 3){
  //   computer wins
  console.log("You lose! Scissors beats Paper")
    return 2;
   }
   else if (playerSelection === 3 && computerSelection === 1){
    // computer wins
    console.log("You lose! Rock beats Scissors")
    return 2;
   }
   else if (playerSelection === 3 && computerSelection ===2){
    // player wins
    console.log("You win! Scissors  beats Paper")
    return 1;
   }
   else {
    console.log("It's a tie!")
    return 0;
   }
  

}
//round counter
function playGame(){ 
  let playerScore=0;
  let compScore=0;
  for(i=0; i<5; i++){
  
  let compChoice = getComputerChoice();
  let playChoice = playerSelection();
  let result;
  result = playRound(playChoice, compChoice);
  if ( result === 1){
    playerScore++;
  }
  else if (result === 2){
    compScore++;
  }
 
}
//compare scores
if( playerScore > compScore){
  console.log(`Congrats: You are the winner with score: ${playerScore} to ${playerScore}.`);
}
else if (playerScore < compScore){
  console.log(`Congrats: You are the winner with score: ${compScore} to ${playerScore}.`)
}
else {
  console.log(`It's a tie : ${playerScore} : ${playerScore}`);
}
}
//execute
console.log("Hello this is Rock Paper Scissors Game. We play 5 rounds. Good luck!");
playGame();