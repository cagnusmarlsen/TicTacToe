const cells = document.querySelectorAll(".board");

const gameBoard = () => {
    const board = ["","","","","","","","",""];
    console.log(board);
    return {board};
}

const newBoard = gameBoard();
const a =newBoard.board;

displayBoard();

function displayBoard () {
    for(let i = 0; i < 9; i++) {
        cells[i].textContent = a[i];
    }
}
let turn = 1;
function check (e) {
    let cell = e.target.id;
    if(turn == 1) {
       addX(cell);
       turn++;
    }
    else {
        addO(cell);
        turn--;
    }
}

cells.forEach(cells => {
    cells.addEventListener('click', check);
})

function addX (cell) {
    a[cell] = "X";
    displayBoard();
}
function addO (cell) {
    a[cell] = "O";
    displayBoard();
}
