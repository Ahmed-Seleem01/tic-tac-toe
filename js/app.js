const gameComponents = (function () {
  const board = document.querySelector(".board");
  const result = document.querySelector("#result");
  let moves = 0;
  const movesIncrement = function () {
    this.moves += 1;
  };
  const getMoves = function (){
    return this.moves;
  };
  return {board, moves, result, getMoves, movesIncrement};
})();

const GameBoard = (()=>{
  const boardArr = ["", "", "", "", "", "", "", "", ""];
  return {boardArr};
})();

const Players = (name, mark, color) => {
  return {name, mark, color};
};

const player1 = Players("Player X", "X", "red");
const player2 = Players("Player O", "O", "blue");

let currentPlayer = player1;

// Define game object to hold the logic of the game
const Game = (function(){
  const playGame = function (){
    const checkForWin = function (){
      if(GameBoard.boardArr[0] === currentPlayer.mark &&
         GameBoard.boardArr[1] === currentPlayer.mark &&
         GameBoard.boardArr[2] === currentPlayer.mark){
           return true;
        }
      else if(GameBoard.boardArr[3] === currentPlayer.mark &&
              GameBoard.boardArr[4] === currentPlayer.mark &&
              GameBoard.boardArr[5] === currentPlayer.mark){
                return true;
        }
      else if(GameBoard.boardArr[6] === currentPlayer.mark &&
              GameBoard.boardArr[7] === currentPlayer.mark &&
              GameBoard.boardArr[8] === currentPlayer.mark){
                return true;
        }
      else if(GameBoard.boardArr[0] === currentPlayer.mark &&
              GameBoard.boardArr[3] === currentPlayer.mark &&
              GameBoard.boardArr[6] === currentPlayer.mark){
                return true;
        }
      else if(GameBoard.boardArr[1] === currentPlayer.mark &&
              GameBoard.boardArr[4] === currentPlayer.mark &&
              GameBoard.boardArr[7] === currentPlayer.mark){
                return true;
        }
      else if(GameBoard.boardArr[2] === currentPlayer.mark &&
              GameBoard.boardArr[5] === currentPlayer.mark &&
              GameBoard.boardArr[8] === currentPlayer.mark){
                return true;
        }
      else if(GameBoard.boardArr[0] === currentPlayer.mark &&
              GameBoard.boardArr[4] === currentPlayer.mark &&
              GameBoard.boardArr[8] === currentPlayer.mark){
                return true;
        }
      else if(GameBoard.boardArr[2] === currentPlayer.mark &&
              GameBoard.boardArr[4] === currentPlayer.mark &&
              GameBoard.boardArr[6] === currentPlayer.mark){
                return true;
        }else {
           return false;
        }
    };

    const checkForTie = function (){
      if(gameComponents.getMoves() === 9){
        return true;
      }
      return false;
    };

    const addMarker = function (index){
      if(this.textContent === "" && !checkForWin()){
        this.textContent = currentPlayer.mark;
        this.style.color = currentPlayer.color;
        GameBoard.boardArr[index] = this.textContent;
        gameComponents.movesIncrement();
        if(checkForWin()){
         gameComponents.result.textContent = currentPlayer.name + " Win"; 
         gameComponents.result.classList.add("result");
       }

       if(checkForTie()&& !checkForWin()){
         gameComponents.result.textContent = "Tie";
         gameComponents.result.classList.add("result");
       }
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
      }
    };
    //console.log(board);
    for (let i = 0; i < 9; i++){
      const boardSquare = document.createElement("div");
      boardSquare.classList.add("mark", `square-${i}`);
      boardSquare.addEventListener("click", addMarker.bind(boardSquare, i));
      gameComponents.board.appendChild(boardSquare);
    }
  };  
  return {playGame};
})();