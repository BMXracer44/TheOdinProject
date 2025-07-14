const container = document.querySelector("#interface");

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
        const winner = document.createElement("div");
        winner.classList.add("winner");
        winner.textContent = "You tied! The computer also picked " + humanChoice + "!";

        container.appendChild(winner);        
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        const winner = document.createElement("div");
        winner.classList.add("winner");
        winner.textContent = "You win! Paper beats rock!";

        container.appendChild(winner);         
        humanScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        const winner = document.createElement("div");
        winner.classList.add("winner");
        winner.textContent = "You win! Rock beats scissors!";

        container.appendChild(winner);        
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        const winner = document.createElement("div");
        winner.classList.add("winner");
        winner.textContent = "You win! Scissors beats paper!";

        container.appendChild(winner);        
        humanScore++;
    }
    else{
        const winner = document.createElement("div");
        winner.classList.add("winner");
        winner.textContent = "You lose! " + computerChoice + " beats " + humanChoice + "!";

        container.appendChild(winner);
        computerScore++;
    }
}

/*while((humanScore + computerScore) < 5){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}*/

if(humanScore > computerScore){
    const champ = document.createElement("div");
    champ.classList.add("champ");
    champ.textContent = "You win!";

    container.appendChild(champ);
}
else if(humanScore == computerScore){
    const champ = document.createElement("div");
    champ.classList.add("champ");
    champ.textContent = "You tied!";
    
    container.appendChild(champ);
}
else{
    const champ = document.createElement("div");
    champ.classList.add("champ");
    champ.textContent = "You lose!";

    container.appendChild(champ);
}