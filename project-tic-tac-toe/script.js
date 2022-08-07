// factory function for player----------------------------------------------------------
const createPlayer = (name, symbol) => {
    let _playerName = name;
    let _playerSymbol = symbol;
    const getPlayer = () => {
        return [_playerName, _playerSymbol];
    }
    return { getPlayer };
};
// module for diplaying content----------------------------------------------------------
const displayController = (() => {
    const boardCells = document.querySelectorAll('.board-cell');
    const dspMsg = document.getElementById('game-message');
    const btn = document.getElementById('button');
    boardCells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (gameFlow.getGameEnd() || e.target.textContent !== "") return;
            gameFlow.playGame(parseInt(e.target.id));
            updateGameboard();
        });
    });
    btn.addEventListener('click', (e) => {
        if (e.target.textContent === 'Start') {
            gameFlow.setGameStart();
            e.target.textContent = 'Restart';
            displayController.displayMessage(`${gameFlow.getPlayerName()}'s turn`)
        }
        else if (e.target.textContent === 'Restart') {
            e.target.textContent = 'Start';
            gameBoard.resetBoard();
            gameFlow.reset();
            updateGameboard();
        }
    })
    const displayMessage = (message) => {
        dspMsg.innerText = message;
    }
    const updateGameboard = () => {
        for (let i = 0; i < boardCells.length; i++) {
            boardCells[i].textContent = gameBoard.getCell(i);
        }
    }
    return { displayMessage }
})();
// module for game board--------------------------------------------------------------------
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    }
    const setCell = (cellId, cellSymbol) => {
        if (cellId > board.length) return;
        board[cellId] = cellSymbol;
    }
    const getCell = (cellId) => {
        if (cellId > board.length) return;
        return board[cellId];
    }
    return { resetBoard, setCell, getCell };
})();
// module for game flow-------------------------------------------------------------------
const gameFlow = (() => {
    let player1;
    let player2;
    let gameStart = false;
    let gameEnd = false;
    let matchFound = false;
    let count = 1;
    const setGameStart = () => {
        gameStart = true;
        player1 = createPlayer(...document.getElementById('player1').value.split(","));
        player2 = createPlayer(...document.getElementById('player2').value.split(","));
    }
    const getGameEnd = () => {
        return gameEnd;
    }
    const reset = () => {
        gameStart = false;
        gameEnd = false;
        matchFound = false;
        count = 1;
    }
    const playGame = (cellId) => {
        if (!gameStart) return;
        gameBoard.setCell(cellId, getPlayerSymbol());
        if (checkIfWon(cellId)) {
            displayController.displayMessage(`${getPlayerName()} won 👏`);
            gameEnd = true;
            return;
        }
        if (count === 9) {
            displayController.displayMessage("Game is draw!");
            gameOver = true;
            return;
        }
        count++;
        displayController.displayMessage(`${getPlayerName()}'s turn`);
    }
    const getPlayerName = () => {
        return count % 2 === 1 ? player1.getPlayer()[0] : player2.getPlayer()[0];
    }
    const getPlayerSymbol = () => {
        return count % 2 === 1 ? player1.getPlayer()[1] : player2.getPlayer()[1];
    }
    const checkIfWon = (cellId) => {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let subCombinations = winCombinations.filter((combination) => combination.includes(cellId));
        subCombinations.forEach((combination) => {
            if (combination.every((index) => gameBoard.getCell(index) === getPlayerSymbol())) {
                matchFound = true;
            }
        })
        return matchFound;
    }
    return { playGame, setGameStart, getGameEnd, reset, getPlayerName };
})();
