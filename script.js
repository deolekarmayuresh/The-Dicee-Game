// alert("Welcome to play the Dice Game");

//Player 1 left side dice code
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generates dice numbers from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // generate random dice images from 1-6

var randomImageSource = "images/" + randomDiceImage; // generates images from source dice.png1 to dice.png6

var image1 = document.querySelectorAll("img")[0]; // selecting css attribute

image1.setAttribute("src", randomImageSource);

// Player 2 Right side dice code

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h3").innerHTML = "🚩Congrats, Player 1 Wins!🏆";
}
else if (randomNumber2 > randomNumber1) { // if player 2 wins
    document.querySelector("h3").innerHTML = "Congrats, Player 2 Wins!🚩🏆";
}
else { //if it's a draw
    document.querySelector("h3").innerHTML = "It's a tie!🤝";
}