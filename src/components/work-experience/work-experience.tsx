import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useRef } from 'react'
import calendar from './../../assest/img/3d-calendar.png';
import reactLogo from './../../assest/img/reactlogo.png';
import AngularLogo from './../../assest/img/angular.png';
import nextjs from './../../assest/img/nextjs.png';
import tsLogo from './../../assest/img/ts.png';
import jsLogo from './../../assest/img/javascript.png';
import tapsiLogo from './../../assest/img/tapsi-logo.png'
import yaraLogo from './../../assest/img/yara-logo.png'
import dbSolutuionLogo from './../../assest/img/db-solution-logo.png'
import classes from './work-experience.module.scss';
import animationData from './working-man.json';
import { motion } from 'framer-motion';

export default function WorkExperience() {

  useEffect(() => {

  }, [])

  return (
    <div className={classes.work_page} id="work" >
      <div className={`${classes.container} ${classes.work_row}`}>
        <div className={classes.work_experience}>
          <p className={classes.title}>Work Experience</p>
          <div className={classes.work_time_line}>
            <motion.div className={classes.company_info} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ type: 'tween', delay: 0.5 , duration:1}}  >
              <div className={classes.date}>
                <img src={calendar} alt="calendar" />
                <p>Jun 2022 - Present</p>
              </div>
              <div className={classes.company_links}>
                <p>Front end developer at</p>
                <a href='https://tapsi.ir/' className={classes.name} target="_blank"> TAPSI</a>
                <img src={tapsiLogo} alt="tapsi" />
              </div>
            </motion.div>

            <motion.div className={classes.company_info} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ type: 'tween', delay: 1 , duration:1}} viewport={{ once: true }}>
              <div className={classes.date}>
                <img src={calendar} alt="calendar" />
                <p>Oct 2020 - Mar 2022</p>
              </div>
              <div className={classes.company_links}>
                <p>Front end developer at</p>
                <a href='https://yaramobile.com/' className={classes.name} target="_blank"> Yara</a>
                <img src={yaraLogo} alt="yara" />
              </div>
            </motion.div>
            <motion.div className={classes.company_info} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ type: 'tween', delay: 1.5 , duration:1}} viewport={{ once: true }}>
              <div className={classes.date}>
                <img src={calendar} alt="calendar" />
                <p>Sep 2019 - Sep 2020</p>
              </div>
              <div className={classes.company_links}>
                <p>Front end developer at</p>
                <a href='#' className={classes.name}> D.B. Solution</a>
                <img src={dbSolutuionLogo} alt="db-solution" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className={classes.animation} >
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '300px', width: '100%' }}
          >
          </Player>

        </div>
      </div>
    </div>
  )
}
