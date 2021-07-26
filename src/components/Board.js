import Square from './Square';
import { useState, useEffect } from 'react';

const Board = ({ squares, isXTurn, gameWinner, squareBoardHandler }) => {
  const [ren, setrender] = useState(true);
  const onSquareClick = (e) => {
    squareBoardHandler(e.target.id);
    setrender(Math.random());
    console.log(squares);
  };

  const renderSquare = (i) => {
    return (
      <Square
        id={i + 1}
        value={squares[i]}
        key={i}
        fncHandleClick={onSquareClick}
      />
    );
  };

  const cells = squares.map((item, count) => {
    return renderSquare(count);
  });

  return (
    <div className='board'>
      <div className='winner'> {`Winner: ${gameWinner}`} </div>
      <div className='status'> {`Next player ${isXTurn}`} </div>
      <div className='board-row'> {cells.slice(0, 3)} </div>
      <div className='board-row'> {cells.slice(3, 6)} </div>
      <div className='board-row'> {cells.slice(6)} </div>
    </div>
  );
};

export default Board;
