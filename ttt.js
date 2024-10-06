

let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let playerTurn = 1;


function startButton(){
    let timeLeft = 60; 
    let timerEl = document.getElementById("timer"); 
    
    let timer = setInterval(function() {
        timerEl.textContent = "Time left: " + timeLeft + " seconds"; 
        timeLeft--; 
    
        if (timeLeft < 0) { 
            clearInterval(timer); 
            document.getElementById("playerTurn").textContent = "Time is up!"; 
        }
    }, 1000);
}









//alert("What");

//document.getElementById("board00").src = "img/player1.png";
//document.getElementById("board01").src = "img/player1.png";
//document.getElementById("board02").src = "img/player1.png";

// document.getElementById("board10").src = "img/player2.png";

function changeImage(row, col, player) {
    let imgSrc = "img/" + player + ".png";
    let imgId = "board" + row + col;
    document.getElementById(imgId).src = imgSrc;
}

// changeImage(0,0,2);
// changeImage(1,1,1);
// changeImage(2,2,1);
let errorCounter = 0;
let counter = ["Select another cell", "SELECT ANOTHER CELL", "ANOTHER CELL!!!",
    "Now don't be dumb..", "Don't be dumb.. SELECT ANOTHER CELL!!!", "Dummy", "Lalalalala"];

function boardClick(row, col) {
    if (board[row][col] !== 0) {
        document.getElementById("playerTurn").innerHTML = counter[errorCounter];
        if (errorCounter < counter.length-1) {
            errorCounter++;
        } else {
            errorCounter = 0;
        }
        return;

    }

    board[row][col] = playerTurn;

    let winner = checkWinner();
    changePlayer();
    updateBoardImage();





    //check winner
    if (winner != 0) {
        document.getElementById("playerTurn").innerHTML = "Congratulation! Player " + winner + " is the winner!";
    } 

}

function changePlayer() {
    if (playerTurn == 1) {
        playerTurn = 2;
    } else {
        playerTurn = 1;
    }
}



function updateBoardImage() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let player = board[row][col];
            changeImage(row, col, player);
        }

    }
    document.getElementById("playerTurn").innerHTML = "Player" + playerTurn;
}

//function winning

function checkWinner() {
    // check row
    for (let row = 0; row < 3; row++) {
        if (board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
            if (board[row][0] != 0) {
                return board[row][0];
            }
        }
    }
    // check col
    for (let col = 0; col < 3; col++) {
        if (board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
            if (board[0][col] != 0) {
                return board[0][col];
            }
        }
    }
    // check diagonal
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        if (board[0][0] != 0) {
            return board[0][0];
        }
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
        if (board[0][2] != 0) {
            return board[0][2];
        }
    }
    return 0;
}

function resetGame() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    playerTurn = 1;
    updateBoardImage();
}



//board [0][0]=1;
//board [1][1]=1;
//board [2][2]=1;
updateBoardImage();






