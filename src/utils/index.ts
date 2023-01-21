import { WINNER_COMBOS } from '../constants';
import { Board } from '../types';

export const checkWinner = (boardToCheck: Board) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    )
      return boardToCheck[a];
  }
  return null;
};
export const isBoardFulfilled = (board: Board) => board.every(x => x);

export const saveGameStorage = (board: Board, turn: string) => {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);
};
export const resetGameStorage = () => {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
};
