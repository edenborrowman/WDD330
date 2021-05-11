
//DECLARING THE VARIABLES
const player1 = "X"
const player2 = "0"
let current_player = player1;
// const squares = Array.from(document.querySelectorAll('.cell'));
// console.log(squares);
const board = document.querySelector('.game_grid');
console.log(board);


//EVENT LISTENER...DID THE PLAYER CLICK?

function  playerPlayed(e) {
    console.log(e.target);
    e.target.innerHTML = current_player;
    if(current_player === player1){
        current_player = player2}
    else {
        current_player = player1;
    }
}

board.addEventListener('click', playerPlayed)

//Resetting The Board

function reset() {
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");

}
 //Game Winning Conditions


 const gameState = ["", "", "","", "", "","", "", ""]


const winningConditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
for(i=0; i <= 8; i++) {
const winCondition = winningConditions[i];
let a = gameState[winCondition[0]];
let b = gameState[winCondition[1]];
let c = gameState[winCondition[2]];
if (a === "" || b === "" || c === "") {
    continue;
}
if (a === b && b === c) {
    console.log('peaches');
    break;
}

}



