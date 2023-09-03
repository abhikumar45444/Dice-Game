let whoWin = document.querySelector(".who-win");

let player1Image = document.querySelector("#player1-dice>img");
let player2Image = document.querySelector("#player2-dice>img");


function rollDice(){
    let dices = [];
    let rollDice1 = Math.floor(Math.random()*6+1);
    
    let rollDice2 = Math.floor(Math.random()*6+1);

    if(rollDice1 > rollDice2){
        whoWin.textContent = "🚩 Player 1 Wins!";
    }
    else if(rollDice1 < rollDice2)
    {
        whoWin.textContent = "Player 2 Wins! 🚩";
    }
    else
    {
        whoWin.textContent = "🚩 Draw 🚩";
    }

    player1Image.src = `./images/dice${rollDice1}.png`;
    player2Image.src = `./images/dice${rollDice2}.png`;
}

rollDice();