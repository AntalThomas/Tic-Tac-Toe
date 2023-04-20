var gameBoard = document.querySelector("#gameBoard")
var gameCell = document.getElementsByClassName("gameCell")
const playerOne = "X", playerTwo = "O"
var currentPlayer = playerOne
var winningGames = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function playerShot(event) {
    if (event.target.textContent === ""){
        event.target.textContent = currentPlayer

        if (currentPlayer === playerOne) {
            event.target.textContent = currentPlayer
            event.target.classList.add(currentPlayer)

            currentPlayer = playerTwo
        } else {
            event.target.textContent = currentPlayer
            event.target.classList.add(currentPlayer)

            currentPlayer = playerOne
        }
    }

    if (checkWinner(winningGames) === true) {
        console.log("Congrats You have won")
    }
}



function checkWinner(winningGames) {
    var count = 0

    for (var i = 0; i < winningGames.length; i++) {
        for (var j = 0; j < winningGames[i].length; j++) {
            if (gameBoard.children[winningGames[i][j]].classList[1] === "X") {
                count++
            }
        }
        
        if (count === 3) {
            return true
        }
        count = 0

        for (var j = 0; j < winningGames[i].length; j++) {
            if (gameBoard.children[winningGames[i][j]].classList[1] === "O") {
                count++
            }
        }

        if (count === 3) {
            return true
        }
        count = 0
    }
}

// Previous code when I didn't know how to make the X and O take turns
// gameBoard.addEventListener("click", function (event) {
//     var box = event.target

//     if (box.textContent === "") {
//         box.textContent = "X"
//     } else if (box.textContent === "X") {
//         box.textContent = "O"
//     } else {
//         box.textContent = ""
//     }
// })




for (var i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener("click", playerShot, false)
}