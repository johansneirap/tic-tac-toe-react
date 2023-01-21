export enum TURNS {
  x = '❌',
  o = '⚪️',
}
export enum CONST_TEXTS {
  TITLE_GAME = 'Tic Tac Toe',
  START_AGAIN = 'Start Again',
  RESET_GAME = 'Reset Game',
  DRAW = "It's a draw",
  WON = 'won!',
}
export const BOARD_INIT_STATE = Array(9).fill(null);
export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
