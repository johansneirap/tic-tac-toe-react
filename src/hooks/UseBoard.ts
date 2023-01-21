import { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  isBoardFulfilled,
  saveGameStorage,
  checkWinner,
  resetGameStorage,
} from '../utils';
import { BOARD_INIT_STATE, TURNS } from '../constants';
import { Board, Winner } from '../types';

const UseBoard = () => {
  const [board, setBoard] = useState<Board>(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : BOARD_INIT_STATE;
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? turnFromStorage : TURNS.x;
  });
  const [winner, setWinner] = useState<Winner>(null);

  const updateBoard = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    saveGameStorage(newBoard, newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    }
    if (isBoardFulfilled(newBoard) && !newWinner) setWinner(false);
  };

  const resetGame = () => {
    setBoard(BOARD_INIT_STATE);
    setTurn(TURNS.x);
    setWinner(null);
    resetGameStorage();
  };

  return { board, turn, winner, updateBoard, resetGame };
};

export default UseBoard;
