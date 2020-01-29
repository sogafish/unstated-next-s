import React, { useContext } from 'react';
import { CounterContext } from '../../App';

const ResetButtonN = () => {
  const {
    reset,
  } = useContext(CounterContext);

  return (
    <button className="resetButton" onClick={reset}>reset</button>
  );
};;

export default ResetButtonN;
