let choices = ["Rock", "Paper", "Scissors"]


function play(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice == "Rock" && computerChoice == "Rock") {
        return console.log("tie!");
    }
    if (playerChoice == "Paper" && computerChoice == "Rock") {
        return console.log("Win!");
    }
    if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return console.log("You lost this one");
    }
    if (playerChoice == "Scissors" && computerChoice == "Scissors") {
        return console.log("Tie!");
    }
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return console.log("Win");
    }
    if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return cosnsole.log("You lost this one");
    }
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        return console.log("You lost this one");
    }

    if (playerChoice == "Paper" && computerChoice == "Paper") {
        return console.log("Tie");
    }
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return console.log("Win!");
    }
}