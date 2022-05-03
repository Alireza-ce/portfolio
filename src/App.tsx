import { useState } from 'react'

import classes from './app.module.scss'
import About from './components/about/about'
import Home from './components/home/home'
import WorkExperience from './components/work-experience/work-experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes.app}>
     <Home />
     <WorkExperience />
     <About />
    </div>
  )
}

export default App
