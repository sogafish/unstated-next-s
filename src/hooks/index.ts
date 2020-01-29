import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return { count, decrement, increment, reset }
}

const CounterContainer = createContainer(useCounter);

export {
  useCounter,
  CounterContainer,
};
