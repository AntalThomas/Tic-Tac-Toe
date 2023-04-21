var winningWindow = document.querySelector("#winningWindow")
var gameBoard = document.querySelector("#gameBoard")
var gameCell = document.getElementsByClassName("gameCell")
var winningPlayer = document.querySelector(".winningPlayer")
var restartButton = document.querySelector("#restart")
const playerOne = "X", playerTwo = "O"
var currentPlayer = playerOne
var game = true
var winningGames = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function playerShot(event) {
    var clickedCell = event.target

    if (clickedCell.textContent === ""){
        clickedCell.textContent = currentPlayer

        if (currentPlayer === playerOne) {
            clickedCell.classList.add(currentPlayer)

            currentPlayer = playerTwo
        } else {
            clickedCell.classList.add(currentPlayer)

            currentPlayer = playerOne
        }
    }

    if (checkWinner(winningGames) === true) {
        winningWindow.style.visibility = "visible"

        if (currentPlayer === "X") {
            winningPlayer.textContent = "O"
        } else {
            winningPlayer.textContent = "X"
        }

        gameBoard.remove()
    }

    if (checkDrawn(gameBoard) === true) {
        drawnWindow.style.visibility = "visible"
    }
}

function checkDrawn(gameBoard) {
    var gameCell = gameBoard.children
    var count = 0

    for (var i = 0; i < gameCell.length; i++) {
        if (gameCell[i].classList[1] === "X" || gameCell[i].classList[1] === "O") {
            count++
        }
    }

    if (count === 9) {
        return true
    }
}

function checkWinner(winningGames) {
    function loopChecker(symbol) {
        var count = 0
        
        for (var j = 0; j < winningGames[i].length; j++) {
            if (gameBoard.children[winningGames[i][j]].classList[1] === symbol) {
                count++
            }
        }

        if (count === 3) {
            return true
        }
    }

    for (var i = 0; i < winningGames.length; i++) {
        if (loopChecker("X") === true) { return true }

        if (loopChecker("O") === true) { return true }
    }
}

for (var i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener("click", playerShot)
}