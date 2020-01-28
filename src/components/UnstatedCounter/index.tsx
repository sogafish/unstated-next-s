import React from 'react';
import { CounterContainer } from '../../hooks';
import { useContainer } from 'unstated-next';

const UnstatedCounter = () => {
  const {
    count,
    decrement,
    increment,
  } = useContainer(CounterContainer);

  return (
    <div className="counterN">
      <span className="decrement" onClick={decrement}>-</span>
      <span className="countNum">{count}</span>
      <span className="increment" onClick={increment}>+</span>
    </div>
  );
};

export default UnstatedCounter;
