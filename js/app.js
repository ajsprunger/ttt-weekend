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

function init(){
  gameBoard = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
  message.textContent = ''
}

function render(){
  gameBoard.forEach(square => {
    
  });
  function isWinner(winner) {
    return winner === 1 ? message.textContent = "Player 1 wins!"
    : winner === -1 ? message.textContent = "Player 2 wins!"
    : winner === 'T' ? message.textContent = "Tie game!"
  }
}





init()



