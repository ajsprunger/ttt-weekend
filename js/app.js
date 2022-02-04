/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/

let gameBoard, turn, winner



/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('.board')
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')
const sq0 = document.getElementById('0')
const sq1 = document.getElementById('1')
const sq2 = document.getElementById('2')
const sq3 = document.getElementById('3')
const sq4 = document.getElementById('4')
const sq5 = document.getElementById('5')
const sq6 = document.getElementById('6')
const sq7 = document.getElementById('7')
const sq8 = document.getElementById('8')
const squaresArr = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8]





/*----------------------------- Event Listeners -----------------------------*/
resetBtn.addEventListener('click', function(){
  init()
})



/*-------------------------------- Functions --------------------------------*/
init()
clickHandler()


function init(){
  gameBoard = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  message.textContent = ''
  resetBtn.setAttribute('hidden', true)
  render()
}

function render(){
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === 1){
      squaresArr[i].innerText = "X"
    } else if (gameBoard[i] === -1) {
      squaresArr[i].innerText ="O"
    } else {
      squaresArr[i].innerText = ""
    }
  }
  isWinner()
  if (gameBoard.some(x => Math.abs(x) === 1)){
    resetBtn.hidden = false
  }
}

function clickHandler() {
  board.addEventListener('click', function(square){
    if (Math.abs(gameBoard[(parseInt(square.target.id))]) === 1
    || winner !== null){
      return
    } else {
    gameBoard[(parseInt(square.target.id))] = turn
    }
    getWinner()
    changeTurn()
    render()

  })
}




function playerTurn() {
  return (turn === -1 ? "Player 2" : "Player 1")
}

function getWinner() {
  if (Math.abs(gameBoard[0] + gameBoard[1] + gameBoard[2]) === 3 ||
  Math.abs(gameBoard[3] + gameBoard[4] + gameBoard[5]) === 3 ||
  Math.abs(gameBoard[6] + gameBoard[7] + gameBoard[8]) === 3 ||
  Math.abs(gameBoard[0] + gameBoard[3] + gameBoard[6]) === 3 ||
  Math.abs(gameBoard[1] + gameBoard[4] + gameBoard[7]) === 3 ||
  Math.abs(gameBoard[2] + gameBoard[5] + gameBoard[8]) === 3 ||
  Math.abs(gameBoard[0] + gameBoard[4] + gameBoard[8]) === 3 ||
  Math.abs(gameBoard[2] + gameBoard[4] + gameBoard[6]) === 3 )
  {
    winner = turn
    confetti.start(4000)
  } else if (gameBoard.every(x => Math.abs(x) === 1)){
    winner = 'T'
  }
    
}


function isWinner() {
  return winner === 1 ? message.textContent = "Player 1 wins!"
  : winner === -1 ? message.textContent = "Player 2 wins!"
  : winner === 'T' ? message.textContent = "Tie game!"
  : message.textContent = `It's ${playerTurn()}'s turn.`
}

function changeTurn() {
  turn = turn * -1
}


