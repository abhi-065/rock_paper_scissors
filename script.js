function getComputerChoice(){
    let n = Math.random();
    if (n>=0 && n<0.3){
        return "rock";
    }
    else if (n>=0.3 && n<0.5){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter your choice: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice===computerChoice){
        console.log(`This is a tie! You both chose ${humanChoice}`);
    }
    else if (humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;
        console.log(`You lose! Paper beats Rock`);
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        humanScore++;
        console.log(`You won! Rock beats Scissors`);
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        console.log(`You won! Paper beats Rock`);
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){
        computerScore++;
        console.log(`You lose! Scissors beats Paper`);
    }
    else if (humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++;
        console.log(`You lose! Rock beats Scissors`);
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        humanScore++;
        console.log(`You won! Scissors beats Paper`);
    }
}

function playGame(){
    for (let i=1; i<=5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Score of this game is: You = ${humanScore} and Computer = ${computerScore}`);
    if (humanScore>computerScore){
        console.log("YOU WON this game!");
    }
    else if (humanScore<computerScore){
        console.log("COMPUTER WON this game!");
    }
    else {
        console.log("This is a tie!");
    }
}

playGame();