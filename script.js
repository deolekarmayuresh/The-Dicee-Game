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

