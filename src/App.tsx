import { useState } from 'react'

import classes from './app.module.scss'
import About from './components/about/about'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import WorkExperience from './components/work-experience/work-experience'

function App() {
  return (
    <div className={classes.app}>
      {/* <Navbar /> */}
      <Home />
      <WorkExperience />
      <About />
      <Footer />
    </div>
  )
}

export default App
