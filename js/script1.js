const playerNumArea = document.getElementById("player-num");
const playerOneScoreArea = document.getElementById("player-1-score");
const playerTwoScoreArea = document.getElementById("player-2-score");
const playerOneButton = document.getElementById("player-1-btn");
const playerTwoButton = document.getElementById("player-2-btn");
const diceImg = document.getElementById("dice-image");
const resetButton = document.getElementById("reset-btn");

const data = {
    currentPlayer: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
}

const setCurrentPlayer = (playerNumber) => {
    data.currentPlayer = playerNumber;
    playerNumArea.innerText = data.currentPlayer;

    if(data.currentPlayer == 1)
    {
        playerOneButton.removeAttribute("disabled");
        playerTwoButton.setAttribute("disabled", "disabled");
    }
    else
    {
        playerTwoButton.removeAttribute("disabled");
        playerOneButton.setAttribute("disabled", "disabled");
    }
}

const startGame = () =>
{
    setCurrentPlayer(Math.ceil(Math.random() * 2));

    data.playerOneScore = 0;
    data.playerTwoScore = 0;

    playerOneScoreArea.innerText = data.playerOneScore;
    playerTwoScoreArea.innerText = data.playerTwoScore;
}

const rollTheDice = () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    diceImg.src = `./Assets/${randomNumber}.png`;

    if(data.currentPlayer == 1)
    {
        data.playerOneScore += randomNumber;
        playerOneScoreArea.innerText = data.playerOneScore;
    }
    else
    {
        data.playerTwoScore += randomNumber;
        playerTwoScoreArea.innerText = data.playerTwoScore;
    }
}

playerOneButton.addEventListener("click" , () => {
    rollTheDice();
    if(data.playerOneScore >= 30)
    {
        setTimeout(() => {alert("Player 1 won"), 500});
        playerOneButton.setAttribute("disabled", "disabled");
        resetButton.removeAttribute("disabled");
    }
    else
    {
        setCurrentPlayer(2);
    }
    
})

playerTwoButton.addEventListener("click" , () => {
    rollTheDice();
    if(data.playerTwoScore >= 30)
    {
        setTimeout(() => {alert("Player 2 won"), 500});
        playerTwoButton.setAttribute("disabled", "disabled");
        resetButton.removeAttribute("disabled");
    }
    else
    {
        setCurrentPlayer(1);
    }
})

resetButton.addEventListener("click", () => {
    startGame();
    resetButton.setAttribute("disabled", "disabled");
})

window.onload = () => {
    startGame();
}