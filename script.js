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