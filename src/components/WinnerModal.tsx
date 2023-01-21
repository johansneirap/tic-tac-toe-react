import { CONST_TEXTS } from '../constants';
import { Winner } from '../types';
import Square from './Square';

interface WinnerModalProps {
  winner: Winner;
  resetGame: () => void;
}

const WinnerModal = ({ winner, resetGame }: WinnerModalProps) => {
  if (winner === null) return null;
  const winnerText = winner ? `${winner} ${CONST_TEXTS.WON}` : CONST_TEXTS.DRAW;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {winner && <Square isSelected>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>{CONST_TEXTS.START_AGAIN}</button>
        </footer>
      </div>
    </section>
  );
};

export default WinnerModal;
