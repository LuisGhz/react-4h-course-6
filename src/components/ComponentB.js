import { useEffect } from 'react';

let renderCount = 0;
const ComponentB = props => {
  useEffect(() => {
    renderCount++;
  })
  return (
    <div>
      <h1>
        Component B render count: { renderCount } || Counter App: { props.count }
      </h1>
    </div>
  )
}

export default ComponentB;