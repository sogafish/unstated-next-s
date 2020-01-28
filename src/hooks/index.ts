import { useState } from 'react';

const useCounterN = () => {
  // state
  const [count, setCount] = useState(0);

  // logics
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return { count, decrement, increment }
}

export {
  useCounterN,
};
