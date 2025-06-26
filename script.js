function getComputerChoice(){
    let n = Math.random();
    if (n>=0 && n<0.33){
        return "rock";
    }
    else if (n>=0.33 && n<0.66){
        return "paper";
    }
    else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function incrementHumanScore(){

    let humanEvent = new CustomEvent('incrementHumanScore');

    results.dispatchEvent(humanEvent);
}

function incrementComputerScore(){

    let computerEvent = new CustomEvent('incrementComputerScore');

    results.dispatchEvent(computerEvent);
}

const results = document.querySelector(".results");
const score = document.querySelector(".score");

function updateScoreDisplay(){
    score.textContent = `Player Score: ${humanScore} and Computer Score: ${computerScore}`;
}

results.addEventListener('incrementHumanScore', updateScoreDisplay);
results.addEventListener('incrementComputerScore', updateScoreDisplay);

function playRound(humanChoice, computerChoice){
    if (humanChoice===computerChoice){
        results.textContent = `This is a tie! You both chose ${humanChoice}`;
    }
    else if (humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;
        incrementComputerScore();
        results.textContent = `You lose! Paper beats Rock`;
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        humanScore++;
        incrementHumanScore();
        results.textContent = `You won! Rock beats Scissors`;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        incrementHumanScore();
        results.textContent = `You won! Paper beats Rock`;
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){
        computerScore++;
        incrementComputerScore();
        results.textContent = `You lose! Scissors beats Paper`;
    }
    else if (humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++;
        incrementComputerScore();
        results.textContent = `You lose! Rock beats Scissors`;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        humanScore++;
        incrementHumanScore();
        results.textContent = `You won! Scissors beats Paper`;
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));