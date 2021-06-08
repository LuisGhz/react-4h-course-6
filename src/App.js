import { useState, useMemo } from 'react';
import ComponentA from 'components/ComponentA';
import ComponentB from 'components/ComponentB';
import './App.css';

function App() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  // useMemo only re render if the dependencies have changed.
  const memoComponentA = useMemo(() => <ComponentA count={ counterA } />, [ counterA ]);

  const incrementA = () => {
    setCounterA(counterA + 1);
  }
  const incrementB = () => {
    setCounterB(counterB + 1);
  }

  return (
    <div className="App">
      App js counter a: { counterA }
      <p>
        <button onClick={ incrementA }>Increment A</button>
      </p>
      <p>
        <button onClick={ incrementB }>Increment B</button>
      </p>
      { memoComponentA }
      <ComponentB count={ counterB } />
    </div>
  );
}

export default App;
