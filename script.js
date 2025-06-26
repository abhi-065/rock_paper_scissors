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

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");

function playRound(humanChoice, computerChoice){
    if (humanChoice===computerChoice){
        results.textContent = `This is a tie! You both chose ${humanChoice}`;
    }
    else if (humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;
        results.textContent = `You lose! Paper beats Rock`;
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        humanScore++;
        results.textContent = `You won! Rock beats Scissors`;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        results.textContent = `You won! Paper beats Rock`;
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){
        computerScore++;
        results.textContent = `You lose! Scissors beats Paper`;
    }
    else if (humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++;
        results.textContent = `You lose! Rock beats Scissors`;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        humanScore++;
        results.textContent = `You won! Scissors beats Paper`;
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));