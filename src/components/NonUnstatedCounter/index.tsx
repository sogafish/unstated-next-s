import React, { useContext } from 'react';
import { CounterContext } from '../../App';

const NonUnstatedCounter = () => {
  const {
    count,
    decrement,
    increment,
  } = useContext(CounterContext);

  return (
    <div className="counterN">
      <span className="decrement" onClick={decrement}>-</span>
      <span className="countNum">{count}</span>
      <span className="increment" onClick={increment}>+</span>
    </div>
  );
};

export default NonUnstatedCounter;
