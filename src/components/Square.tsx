import { ReactElement } from 'react';

interface SquareProps {
  children: ReactElement | ReactElement[] | string | null;
  isSelected?: Boolean;
  updateBoard?: (arg: number) => void;
  index?: number;
}

const Square = ({ children, isSelected, updateBoard, index }: SquareProps) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = () => {
    if (!updateBoard) return;
    if (typeof index !== 'number') return;
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default Square;
