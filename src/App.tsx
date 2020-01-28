import React, { createContext } from 'react';
import { useCounter, CounterContainer } from './hooks/';
import NonUnstatedCounter from './components/NonUnstatedCounter';
import UnstatedCounter from './components/UnstatedCounter';

export const CounterContext = createContext({
  count: 0,
  decrement: () => {},
  increment: () => {},
});

const App: React.FC = () => {
  const counter = useCounter();

  return (
    <div className="contents">
      <>
        <h1>Context + hooks</h1>
        <CounterContext.Provider value={counter}>
          <NonUnstatedCounter />
          <NonUnstatedCounter />
        </CounterContext.Provider>
      </>
      <>
        <h1>unstated-next</h1>
        <CounterContainer.Provider>
            <UnstatedCounter />
            <UnstatedCounter />
        </CounterContainer.Provider>
      </>
    </div>
  );
}

export default App;
