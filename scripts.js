let humanScore = 0;
let computerScore = 0;

// Math.random output >= 0 but < 1
// We mutliply it by 3 and use Math.floor to get a number from 1 to 3
// Then we assign 3 numbers to rock, paper, scissors outcome
function getComputerChoice(){
    let machineChoice = Math.floor(Math.random()*3) + 1;
    console.log("Computer choses...");
    if (machineChoice == 1){
        machineChoice = "rock";
    } else if (machineChoice == 2){
        machineChoice = ("paper");
    } else{
        machineChoice = ("scissors");
    }
    console.log(machineChoice);
    return machineChoice;
}

// To get human choice, we have the user type in rock, paper or scissors
function getHumanChoice(){
    // Make case insensitive by all lower case instead
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    // Verify input to the 3 options with a while loop. Ends only when rock, paper or scissors is typed
    let validInput = false;
    while (validInput != true){
        if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
            humanChoice = prompt("Invalid choice. Please type correctly!").toLowerCase();
        } else {
            validInput = true;
        }
    }
    console.log(humanChoice)
    return humanChoice;
}

// Play a round function
// Compare choices with individual cases. Will find better algorithm
// Output result and scores
function playRound(getHumanChoice, getComputerChoice){
    // Computer win cases
    if ((getHumanChoice == "rock" && getComputerChoice == "paper") || (getHumanChoice == "paper" && getComputerChoice == "scissors") || (getHumanChoice == "scissors" && getComputerChoice == "rock")){
        console.log("Computer wins!")
        computerScore++;
    }
    // Human win cases
    else if ((getHumanChoice == "rock" && getComputerChoice == "scissors") || (getHumanChoice == "paper" && getComputerChoice == "rock") || (getHumanChoice == "scissors" && getComputerChoice == "paper")){
        console.log("Player wins!")
        humanScore++;
    }
    // Draw case
    else {
        console.log("Draw!")
    }
    console.log(humanScore, computerScore)
}

// let roundCount = Number(input);
let roundCount = 5;

// Use for loop to play for roundCount number of rounds
for(let i = 0; i < roundCount; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}