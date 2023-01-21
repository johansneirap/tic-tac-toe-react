import Square from './components/Square';
import WinnerModal from './components/WinnerModal';
import { CONST_TEXTS, TURNS } from './constants';
import UseBoard from './hooks/UseBoard';

function App() {
  const { board, turn, winner, updateBoard, resetGame } = UseBoard();

  return (
    <main className="board">
      <h1>{CONST_TEXTS.TITLE_GAME}</h1>
      <button onClick={resetGame}>{CONST_TEXTS.RESET_GAME}</button>
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
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
