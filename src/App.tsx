import { useState } from "react";
import "./App.css";

const TURNS = {
  x: "X",
  o: "O",
};
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
const INIT_STATE = Array(9).fill(null);
function App() {
  const [board, setBoard] = useState(INIT_STATE);
  const [turn, setTurn] = useState(TURNS.x);

  const updateBoard = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    console.log(index);
    console.log(newBoard);
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
  };
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((board, index) => (
          <Square key={index} updateBoard={updateBoard} index={index}>
            {board}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
    </main>
  );
}

export default App;
