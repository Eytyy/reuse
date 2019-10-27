import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Warning = React.lazy(() => import('./Warning'))
const Count = styled.h2`
  font-size: 2em;
  &.warning {
    color: red;
  }
`

const App = () => {
  const [count, updateCount] = useState(0)

  function increment() {
    updateCount(c => c + 1)
  }

  function decrement() {
    updateCount(c => c - 1)
  }
  return (
    <>
      <Count className={count > 10 ? 'warning' : null}> {count} </Count>{' '}
      <button onClick={increment}> + </button>{' '}
      <button onClick={decrement}> - </button>{' '}
      {count > 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}{' '}
    </>
  )
}

export default hot(module)(App)
