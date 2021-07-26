import Square from './';

const Board = () => {
    const renderSquare = (i) => {
        return <Square value = { i }
        key = { i }
        />;
    };

    return [1, 2, 3].map((item, count) => {
        return renderSquare(item);
    });
};

export default Board;