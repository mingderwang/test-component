import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import facepaint from 'facepaint'
import { css } from 'emotion'

const mq = facepaint([':hover'])

const cls = css(mq({ '&': [{ color: 'green' }, { color: 'hotpink' }] }))

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2 className={cls}>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
)

render(<App />, document.getElementById('root'))
