import { useState } from 'react'

import classes from './app.module.scss'
import Home from './components/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes.app}>
     <Home />
    </div>
  )
}

export default App
