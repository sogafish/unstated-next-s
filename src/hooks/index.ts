import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCounter = () => {
  // state
  const [count, setCount] = useState(0);

  // logics
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return { count, decrement, increment }
}

const CounterContainer = createContainer(useCounter)

export {
  useCounter,
  CounterContainer,
};
