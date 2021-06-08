import { useState, useMemo } from 'react';
import ComponentA from 'components/ComponentA';
import './App.css';

function App() {
  const [counterA, setCounterA] = useState(0);
  const memoComponentA = useMemo(() => <ComponentA />, [])

  const incrementA = () => {
    setCounterA(counterA + 1);
  }

  return (
    <div className="App">
      App js counter a: { counterA }
      <p>
        <button onClick={ incrementA }>Increment A</button>
      </p>
      { memoComponentA }
    </div>
  );
}

export default App;
