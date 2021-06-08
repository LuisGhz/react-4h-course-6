import { useEffect } from 'react';

let renderCount = 0;
const ComponentA = props => {
  useEffect(() => {
    renderCount++;
  })
  return (
    <div>
      <h1>
        Component A render count: { renderCount } || App counter: { props.count }
      </h1>
    </div>
  )
}

export default ComponentA;