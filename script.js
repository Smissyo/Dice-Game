document.querySelector(".img1")

var listOfImg=['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];
var num1=(Math.floor(Math.random()*6));
var num2=(Math.floor(Math.random()*6));



document.querySelector('.img1').src=listOfImg[num1];
document.querySelector('.img2').src=listOfImg[num2];



if(num1>num2){
    document.querySelector('h1').textContent="Player 1 won"
}
else if(num1<num2){
    document.querySelector('h1').textContent="Player 2 won"
}
else{
    document.querySelector('h1').textContent="Draw"
}