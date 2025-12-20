const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
let element = document.getElementById("heading")
let player1 = Math.floor(Math.random() * 6) + 1;
let player2 = Math.floor(Math.random() * 6) + 1;

img1.setAttribute("src", `./images/dice${player1}.png`);
img2.setAttribute("src", `./images/dice${player2}.png`);

if(player1>player2){
    element.innerHTML = "winner is player 1";
}else{
    element.innerHTML = "winner is player 2";
}
