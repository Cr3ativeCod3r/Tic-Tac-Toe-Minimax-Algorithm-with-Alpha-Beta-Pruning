
let currentPlayer = 'O';
let gameEnded = false;

function makeMove(x, y) {
    if (gameEnded) return; // Nie pozwól na klikanie po zakończeniu gry
    const cell = document.getElementById(`cell-${x}-${y}`);
    console.log(cell)
    if (!cell.innerText) {
        cell.innerText = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
    actualBoard()
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winner = document.getElementById('win');

    // Check rows
    for (let i = 0; i < 3; i++) {
        if (cells[i * 3].innerText && cells[i * 3].innerText === cells[i * 3 + 1].innerText && cells[i * 3].innerText === cells[i * 3 + 2].innerText) {
            winner.innerHTML =` ${currentPlayer=='O'?"you":"pc"} wins!`
            disableCells();
            gameEnded = true;
            return;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (cells[i].innerText && cells[i].innerText === cells[i + 3].innerText && cells[i].innerText === cells[i + 6].innerText) {
            winner.innerHTML =`${currentPlayer=='O'?"You":"Pc"} wins!`
            disableCells();
            gameEnded = true;
            return;
        }
    }

    // Check diagonals
    if (cells[0].innerText && cells[0].innerText === cells[4].innerText && cells[0].innerText === cells[8].innerText) {
        winner.innerHTML =`${currentPlayer=='O'?"You":"Pc"} wins!`
        disableCells();
        gameEnded = true;
        return;
    }

    if (cells[2].innerText && cells[2].innerText === cells[4].innerText && cells[2].innerText === cells[6].innerText) {
        winner.innerHTML =`${currentPlayer=='O'?"You":"Pc"} wins!`
        disableCells();
        gameEnded = true;
        return;
    }

    if (isDraw()) {
        winner.innerHTML = 'It\'s a draw!';
        gameEnded = true;
    }
}

function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('disabled');
    });
    currentPlayer = 'O';
    document.getElementById('win').innerText = '';
    gameEnded = false; 
}

function disableCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.add('disabled');
    });
}

function isDraw() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].innerText) {
            return false;
        }
    }
    return true;
}


// DATA FOR MINMAX, PC MOVE
function actualBoard() 
{
    let board = [[], [], []];
    let i = 0;

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        if (i <= 2) board[0].push(cell.innerText);
        else if (i <= 5) board[1].push(cell.innerText);
        else if (i <= 8) board[2].push(cell.innerText);

        i++;
    });

    let move = findBestMove(board);
    let x = move.row;
    let y = move.col;

    const cell = document.getElementById(`cell-${x}-${y}`);
    if (!cell.innerText) {
        cell.innerText = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}
