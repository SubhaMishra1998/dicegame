var randomNumber1= Math.floor(Math.random()*6 +1);
var randomNumber2= Math.floor(Math.random()*6 +1);
var randomImagenum1="dice"+ randomNumber1 + ".png" ; 
var randomImagenum2="dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src","images/"+randomImagenum1);
document.querySelector(".img2").setAttribute("src","images/"+randomImagenum2);

if (randomImagenum1>randomImagenum2){
    document.querySelector("h1").innerHTML="Player 1 Wins"
}
else{
    document.querySelector("h1").innerHTML="player 2 Wins";

}




