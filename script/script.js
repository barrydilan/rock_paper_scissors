
function computerSelect() {
    return Math.floor(Math.random() * 3);// rock - 0; paper - 1; scissors - 2
}

function playerSelect() {
    let playerChoice = prompt(console.log("Rock, Paper, Scissors"));
    let playerChoiceNum;
    if (playerChoice=='rock') playerChoiceNum = 0
        else if (playerChoice=='paper') playerChoiceNum = 1
    else playerChoiceNum = 2;
    return playerChoiceNum;
}

function winner() {
    let playerChoiceNum = playerSelect();
    let computerSelectNum = computerSelect();
    if (playerChoiceNum==computerSelectNum) return "Tie"
    else if (playerChoiceNum-computerSelectNum == (-2) || playerChoiceNum-computerSelectNum == 1) return "1" //playerWin
    else return "2"
}

function game() {
    let playerWin = 0;
    let computerWin =0;
    let ties=0;
    for (let i=0;i<5;i++) {
        switch (winner()) {
            case "Tie":
                ties++;
                break;
            case "1":
                playerWin++;
                break;
            case "2":
                computerWin++;
                break;
        }
    }
    return (console.log("Player score "+playerWin + " Computer score "+computerWin + " Ties " + ties))   
}

