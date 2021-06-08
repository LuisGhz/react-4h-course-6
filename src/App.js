import { useState } from 'react';
import ComponentA from 'components/ComponentA';
import './App.css';

function App() {
  const [counterA, setCounterA] = useState(0);

  const incrementA = () => {
    setCounterA(counterA + 1);
  }

  return (
    <div className="App">
      App js counter a: { counterA }
      <p>
        <button onClick={ incrementA }>Increment A</button>
      </p>
      <ComponentA />
    </div>
  );
}

export default App;
