import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
`

const App = () => {
  return <Title>hi</Title>
}

export default hot(module)(App)
