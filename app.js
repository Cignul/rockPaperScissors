function play(playerChoice) {
    let computerChoice = "Rock";
    if (playerChoice == "Rock" && computerChoice == "Rock") {
        return "tie!";
    }
    if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "Win!";
    }
    if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return "You lost this one";
    }
    if (playerChoice == "Scissors" && computerChoice == "Scissors") {
        return "Tie!";
    }
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "Win";
    }
    if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return "You lost this one";
    }
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        return "You lost this one";
    }

    if (playerChoice == "Paper" && computerChoice == "Paper") {
        return "Tie";
    }
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "Win!";
    }