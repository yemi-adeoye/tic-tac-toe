import Board from './Board';
import { useState, useEffect } from 'react';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [playerHistory, setPlayerHistory] = useState(['X']);

  const [comments, setComments] = useState(['Start...']);

  const [isXTurn, setIsXTurn] = useState(true);
  const [gameWinner, setGameWinner] = useState('');

  const calculateWinner = (sqr) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let len = lines.length;

    for (let i = 0; i < len; i++) {
      const [a, b, c] = lines[i];
      if (sqr[a] && sqr[a] === sqr[b] && sqr[a] === sqr[c]) {
        //setWinner(sqr[a]);
        return sqr[a];
      }
    }
    return null;
  };

  useEffect(() => {
    console.log(playerHistory);
  }, [history]);

  const onSquareClick = (id) => {
    let index = id - 1;
    let squares = history[history.length - 1];
    if (squares[index] !== null) return;

    if (gameWinner) return;

    let newSquare = [...squares];

    newSquare[index] = isXTurn ? 'X' : 'O';

    let winner = calculateWinner(newSquare);

    const comm = `Player ${isXTurn ? 'X' : 'O'} sets cell ${id}`;

    let newHistory = [...history, newSquare];
    setHistory(newHistory);

    let newComment = [...comments, comm];
    setComments(newComment);

    if (winner) {
      setGameWinner(winner);
    } else {
      let newTurn = !isXTurn;

      setIsXTurn(newTurn);

      let newPlayerHistory = [...playerHistory, newTurn ? 'X' : 'O'];

      setPlayerHistory(newPlayerHistory);
    }
  };

  const fncHandleHistory = (e) => {
    let id = e.target.id;
    if (id === '0') {
      setHistory([Array(9).fill(null)]);
      setComments(['Start...']);
      setPlayerHistory(['X']);
      return;
    }

    // slice the history and comment arrays to the id of the button clicked
    let newHistory = history.slice(0, id);
    setHistory(newHistory);

    let newComment = comments.slice(0, id);
    setComments(newComment);

    let newPlayerHistory = playerHistory.slice(0, id);
    setPlayerHistory(newPlayerHistory);
  };
  let historyJSx = comments.map((comment, count) => {
    return (
      <button id={count} key={count} onClick={fncHandleHistory}>
        {comment}
      </button>
    );
  });
  return (
    <>
      <Board
        squares={history[history.length - 1]}
        squareBoardHandler={onSquareClick}
        isXTurn={playerHistory[playerHistory.length - 1]}
        gameWinner={gameWinner}
      />
      <div className='history'> {historyJSx} </div>
    </>
  );
};

export default Game;
