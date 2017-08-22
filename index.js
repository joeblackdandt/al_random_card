// JavaScript File
var cards =  ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var suits = ['diamonds', 'spades', 'hearts', 'clubs'];

var card = document.getElementsByClassName('card-container')[0];
var cardCaption = document.getElementById('card_caption');

// run the function for the first time
randomizeCard();

// function to be triggered by the button
function randomizeCard(){

    var randomCard = cards[Math.floor(Math.random()*cards.length)];
    var randomSuit = suits[Math.floor(Math.random()*suits.length)];

    card.className = 'card-container '+randomSuit;
    cardCaption.innerHTML = randomCard;

}