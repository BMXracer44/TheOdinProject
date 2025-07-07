console.log("Hello World!");

let computerScore = 0;
let humanScore = 0;

const getComputerChoice = function() {
	let choice = Math.round(Math.random() * 2 + 1);

    if(choice == 1){
        return "rock";
    }
    else if(choice == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
};

const getHumanChoice = function(){
    let userInput = prompt("Please enter your choice (Rock, paper, scissors): ");

    return userInput.toLowerCase();
}

const playRound = function(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("You tied! The computer also picked " + humanChoice + "!");
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors!");
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper!");
        humanScore++;
    }
    else{
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    }
}

while((humanScore + computerScore) < 5){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

if(humanScore > computerScore){
    console.log("You win!");
}
else if(humanScore == computerScore){
    console.log("You tied!");
}
else{
    console.log("You lose");
}
