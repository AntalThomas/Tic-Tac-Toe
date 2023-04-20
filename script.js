var gameBoard = document.querySelector("#gameBoard")
var gameCell = document.getElementsByClassName("gameCell")
const playerOne = "X", playerTwo = "O"
var currentPlayer = playerOne
var winningGames = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

function playerShot(event) {
    if (event.target.textContent === ""){
        event.target.textContent = currentPlayer

        if (currentPlayer === playerOne) {
            event.target.textContent = currentPlayer

            currentPlayer = playerTwo
        } else {
            event.target.textContent = currentPlayer

            currentPlayer = playerOne
        }
    }
}

function winner() {
    
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