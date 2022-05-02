import { useState } from 'react'

import classes from './app.module.scss'
import About from './components/about/about'
import Home from './components/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes.app}>
     <Home />
     <About />
    </div>
  )
}

export default App
