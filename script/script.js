let choiceArr = ["Rock", "Paper", "Scissors"];



function computerSelect() {
    return Math.floor(Math.random() * 3);// rock - 0; paper - 1; scissors - 2
}

function playerSelect() {
    let playerChoice = prompt("Rock, Paper, Scissors");
    let playerChoiceNum;
    if (playerChoice=='rock') playerChoiceNum = 0
        else if (playerChoice=='paper') playerChoiceNum = 1
    else playerChoiceNum = 2;
    return playerChoiceNum;
    
}

function winner() {
    let playerChoiceNum = playerSelect();
    let computerSelectNum = computerSelect();
    if (playerChoiceNum==computerSelectNum) return ("Tie"+ " " + playerChoiceNum + " " +computerSelectNum ) 
    else if (playerChoiceNum-computerSelectNum == (-2) || playerChoiceNum-computerSelectNum == 1) return ("Player Won " + " " + playerChoiceNum + " " +computerSelectNum)
    else return ("Computer Won" + " " + playerChoiceNum + " " +computerSelectNum ) 

}

function game() {
    console.log("game started");
    let playerChoice = playerSelect();
    let computerChoice = computerSelect();
    
    /*
    if (playerChoice == computerChoice) console.log("Tie", "Player choise is: " + playerChoice, "Computer choise is: " + computerChoice);
    if (playerChoice == 'rock' && computerChoice == 'scissors') console.log("Player won", "Player choise is: " + playerChoice, "Computer choise is: " + computerChoice);
    if (playerChoice == "paper" && computerChoice == 'rock') console.log("Player won", "Player choise is: " + playerChoice, "Computer choise is: " + computerChoice);
    if (playerChoice == 'scissors' && computerChoice == 'paper') console.log("Player won", "Player choise is: " + playerChoice, "Computer choise is: " + computerChoice);
    else console.log("Computer won", "Player choise is: " + playerChoice, "Computer choise is: " + computerChoice);
    */
    
}

