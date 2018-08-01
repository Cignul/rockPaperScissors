let choices = ["Rock", "Paper", "Scissors"]


function play(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice == "Rock" && computerChoice == "Rock") {
        return alert("tie!");
        return console.log("tie!");
    }
    if (playerChoice == "Paper" && computerChoice == "Rock") {
        return alert("Win!")
        return console.log("Win!");
    }
    if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return alert("You lost this one")
        return console.log("You lost this one");
    }
    if (playerChoice == "Scissors" && computerChoice == "Scissors") {
        return alert("Tie!")
        return console.log("Tie!");
    }
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return alert("Win!")
        return console.log("Win");
    }
    if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return alert("You lost this one!")
        return console.log("You lost this one");
    }
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        return alert("You lost this one")
        return console.log("You lost this one");
    }

    if (playerChoice == "Paper" && computerChoice == "Paper") {
        return alert("Tie!")
        return console.log("Tie");
    }
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return alert("Win!")
        return console.log("Win!");
    }
}