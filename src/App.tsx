import React, { createContext } from 'react';
import { useCounter, CounterContainer } from './hooks';
import NonUnstatedCounter from './components/NonUnstatedCounter';
import ResetButtonN from './components/NonUnstatedCounter/ResetButtonN';
import UnstatedCounter from './components/UnstatedCounter';
import ResetButton from './components/UnstatedCounter/ResetButton';

export const CounterContext = createContext({
  count: 0,
  decrement: () => {},
  increment: () => {},
  reset: () => {}
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
          <ResetButtonN />
        </CounterContext.Provider>
      </>
      <>
        <h1>unstated-next</h1>
        <CounterContainer.Provider>
          <UnstatedCounter />
          <UnstatedCounter />
          <ResetButton />
        </CounterContainer.Provider>
      </>
    </div>
  );
}

export default App;
