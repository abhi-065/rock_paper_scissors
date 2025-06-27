const body = document.querySelector("body");

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
    humanScore++;

    let humanEvent = new CustomEvent('incrementHumanScore');

    results.dispatchEvent(humanEvent);
}

function incrementComputerScore(){
    computerScore++;

    let computerEvent = new CustomEvent('incrementComputerScore');

    results.dispatchEvent(computerEvent);
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const results = document.querySelector(".results");

const score = document.querySelector(".score");

const winnerSection = document.createElement("div");
body.appendChild(winnerSection);

const announcementOfWinner = document.createElement("p");

winnerSection.appendChild(announcementOfWinner);

const replayBtn = document.createElement("button");
replayBtn.textContent = "Replay";
winnerSection.appendChild(replayBtn);
replayBtn.addEventListener("click", function (){
    humanScore = 0;
    computerScore = 0;
    announcementOfWinner.textContent = "";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    results.textContent = "";
    updateScoreDisplay();
});

function updateScoreDisplay(){
    score.textContent = `Player Score: ${humanScore} and Computer Score: ${computerScore}`;
}

updateScoreDisplay();

results.addEventListener('incrementHumanScore', updateScoreDisplay);
results.addEventListener('incrementComputerScore', updateScoreDisplay);

function playRound(humanChoice, computerChoice){
    if (humanChoice===computerChoice){
        results.textContent = `This is a tie! You both chose ${humanChoice}`;
        updateScoreDisplay();
    }
    else if (humanChoice==="rock" && computerChoice==="paper"){
        incrementComputerScore();
        results.textContent = `You lose! Paper beats Rock`;
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        incrementHumanScore();
        results.textContent = `You won! Rock beats Scissors`;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        incrementHumanScore();
        results.textContent = `You won! Paper beats Rock`;
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){
        incrementComputerScore();
        results.textContent = `You lose! Scissors beats Paper`;
    }
    else if (humanChoice==="scissors" && computerChoice==="rock"){
        incrementComputerScore();
        results.textContent = `You lose! Rock beats Scissors`;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        incrementHumanScore();
        results.textContent = `You won! Scissors beats Paper`;
    }
    if (humanScore===5 || computerScore===5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (humanScore===5){
            announcementOfWinner.textContent = "Player Won this round!\nTo play another round click replay button";
        }
        else if (computerScore===5){
            announcementOfWinner.textContent = "Computer Won this round!\nTo play another round click replay button";
        }
    }
}

