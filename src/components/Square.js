const Square = ({ fncHandleClick, id, value }) => {
  return (
    <button id={id} className='square' onClick={fncHandleClick}>
      {value}
    </button>
  );
};

export default Square;
