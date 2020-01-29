import React from 'react';
import { useContainer } from 'unstated-next';
import { CounterContainer } from '../../hooks';

const ResetButton = () => {
  const {
    reset,
  } = useContainer(CounterContainer);

  return (
    <button className="resetButton" onClick={reset}>reset</button>
  );
};;

export default ResetButton;
