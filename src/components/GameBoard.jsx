const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard; // gameBoard is a derived state from gameTurns state managed in App component
  // gameBoard is derived from turns state, which is managed in App.jsx
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player; // gameBoard[0][0]=X
  }
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   const handleSelectedSquare = (rowIndex, columnIndex) => {
  // goal is to update the gameBoard dynamically
  // 1) update only one Value, either X or O
  //      a) we need to update the previous state so we have to use callback function
  //      a) player 1 is using X and player 2 is using )
  //      b) which player has clicked has to be founded out
  //      c) place X or O on each grid item
  //
  // setGameBoard((prevGameBoard) => {
  //   const updatedBoard = [
  //     ...prevGameBoard.map((innerArray) => [...innerArray]),
  //   ]; // updated array by immutable way which is strongly recommended
  //   updatedBoard[rowIndex][columnIndex] = activePlayerSymbol; // [0][0], [0][1], [0][2],
  //   return updatedBoard;
  // });
  // onSelectSquare();
  //   };
  return (
    <ol id="game-board">
      {gameBoard.map((rowItem, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowItem.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onSelectSquare(rowIndex, columnIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
