import React, { createContext } from 'react';
import { useCounterN } from './hooks/';
import NonUnstatedCounter from './components/NonUnstatedCounter';

export const CounterContext = createContext({
  count: 0,
  decrement: () => {},
  increment: () => {},
});

const App: React.FC = () => {
  const counter = useCounterN();
  return (
    <div className="contents">
      <h1>Context + hooks</h1>
      <CounterContext.Provider value={counter}>
        <NonUnstatedCounter />
        <NonUnstatedCounter />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
