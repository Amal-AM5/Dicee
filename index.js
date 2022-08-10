
var ranNum = Math.floor(Math.random() * 6 + 1); // 1 - 6

var ranDiceImg = "dice" + ranNum + ".png";

var ranImgSource = "images/" + ranDiceImg; //images/dice1.png - images/dice6.png


var img1 = document.querySelectorAll('img')[0];

img1.setAttribute('src', ranImgSource);





var ranNum2 = Math.floor(Math.random() * 6 + 1);

var ranDiceImg2 = "images/dice" + ranNum2 + ".png";

document.querySelectorAll('img')[1].setAttribute('src', ranDiceImg2);

if (ranNum > ranNum2) {
    document.querySelector('h1').innerHTML = "player 1 wins! ⛳";
} 
else if (ranNum2 > ranNum) {
    document.querySelector('h1').innerHTML = "player 2 wins! ⛳";
}
else {
    document.querySelector('h1').innerHTML = "Draw! 😒";
}