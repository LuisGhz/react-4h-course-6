import { useEffect } from 'react';

let renderCount = 0;
const ComponentB = () => {
  useEffect(() => {
    renderCount++;
  })
  return (
    <div>
      <h1>
        Component B render count: { renderCount }
      </h1>
    </div>
  )
}

export default ComponentB;