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
