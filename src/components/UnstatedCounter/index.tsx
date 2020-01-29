import React from 'react';
import { useContainer } from 'unstated-next';
import { CounterContainer } from '../../hooks';

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
