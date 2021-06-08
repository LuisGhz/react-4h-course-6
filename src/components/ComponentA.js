import { useEffect } from 'react';

let renderCount = 0;
const ComponentA = () => {
  useEffect(() => {
    renderCount++;
  })
  return (
    <div>
      <h1>
        Component A render count: { renderCount }
      </h1>
    </div>
  )
}

export default ComponentA;