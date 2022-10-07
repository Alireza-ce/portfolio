import { animate, motion } from 'framer-motion'
import { useState } from 'react'

import classes from './app.module.scss'
import About from './components/about/about'
import BackgroundLoading from './components/BackgroundLoading/backgroundLoading'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import WorkExperience from './components/work-experience/work-experience'

function App() {
  return (
    <motion.div className={classes.app}>
      {/* <Navbar /> */}
      <BackgroundLoading backgroundColor='#0a222f' delay={.5} zIndex={10} />
      <BackgroundLoading backgroundColor='#fff' delay={.7} zIndex={9} />
      <BackgroundLoading backgroundColor='#5fc9ab' delay={.9} zIndex={8} />
      <Home />
      <WorkExperience />
      <About />
      <Footer />
    </motion.div>
  )
}

export default App
