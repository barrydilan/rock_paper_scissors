let computerScore = 0;
let playerScore = 0;

function getComputeChoice() {
    let computerChoice =  Math.floor(Math.random() * 3); // rock - 0; paper - 1; scissors - 2
    return computerChoice;
}

function getPlayerChoice(e){
    let playerChoice = e.target.id;
    if (playerChoice=='rock') playerChoice = 0
        else if (playerChoice=='paper') playerChoice = 1
    else playerChoice = 2;
    playRound(playerChoice)
}


function playRound(playerChoice){
    let computerChoice = getComputeChoice();
    getWinner(computerChoice,playerChoice);
}

function getWinner(computerChoice, playerChoice){
    const results = ["Rock", "Paper", "Scissors"]
    if (playerChoice==computerChoice) updateStatus("Draw: " + results[playerChoice] + " vs " + results[computerChoice]);
    else if (playerChoice-computerChoice == (-2) || playerChoice-computerChoice == 1) {playerScore++; updateStatus("Player wins: " + results[playerChoice] + " vs " + results[computerChoice]);}                                                       //playerWin
    else {computerScore++ ; updateStatus("Computer wins: " + results[playerChoice] + " vs " + results[computerChoice])};    //computer win
    updateScore(playerScore,computerScore);
}


function updateScore(playerScore,computerScore){ ///updates score to DOM
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
    /* if (playerScore>computerScore) console.log("playr win") */
    checkRoundsCap(playerScore, computerScore);
}

function checkRoundsCap(playerScore, computerScore){ /// check winner after 5 rounds
    if (playerScore+computerScore == 5) {
        choices.forEach(choice => choice.removeEventListener('click', getPlayerChoice))
            if (playerScore-computerScore>0) updateStatus("Player Wins!");
            else if (playerScore-computerScore<0) updateStatus("Computer Wins!");
            else updateStatus("Draw");
        }
    }


function newGame(){
    playerScore = 0;
    computerScore = 0;
    updateScore(playerScore, computerScore);
    updateStatus("Choose your hand!")
    choices.forEach(choice => choice.addEventListener('click', getPlayerChoice))
}

function updateStatus(msg){
     statusMessage.textContent = (msg);
}



const statusMessage = document.querySelector(".statusMessage");
const newGameBtn = document.querySelector("#ngbtn")
newGameBtn.addEventListener('click', newGame);
const choices = Array.from(document.querySelectorAll('.rps'));
choices.forEach(choice => choice.addEventListener('click', getPlayerChoice))
const playerScore_span = document.querySelector("#playerScore")
const computerScore_span = document.querySelector("#computerScore")
const tieScore = document.querySelector("#tie")

