/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let gameBoard, turn, winner



/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('.board')
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')
const sq0 = document.getElementById('sq0')
const sq1 = document.getElementById('sq1')
const sq2 = document.getElementById('sq2')
const sq3 = document.getElementById('sq3')
const sq4 = document.getElementById('sq4')
const sq5 = document.getElementById('sq5')
const sq6 = document.getElementById('sq6')
const sq7 = document.getElementById('sq7')
const sq8 = document.getElementById('sq8')
const squaresArr = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8]





/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()


function init(){
  gameBoard = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  message.textContent = ''
  render()

}

function render(){
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === 1){
      squaresArr[i].innerText = "X"
    } else if (gameBoard[i] === -1) {
      squaresArr[i].innerText ="O"
    } 
  }
    

  isWinner()
}





function playerTurn(turn) {
  return (turn === -1 ? "Player 2" : "Player 1")
}

function isWinner() {
  return winner === 1 ? message.textContent = "Player 1 wins!"
  : winner === -1 ? message.textContent = "Player 2 wins!"
  : winner === 'T' ? message.textContent = "Tie game!"
  : message.textContent = `It's ${playerTurn()}'s turn.`
}

