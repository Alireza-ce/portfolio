import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useRef } from 'react'
import calendar from './../../assest/img/schedule.png';
import classes from './work-experience.module.scss';
import animationData from './working-man.json';

export default function WorkExperience() {

  useEffect(() => {

  }, [])

  return (
    <div className={classes.work_page}  id="work">
      <div className={`${classes.container} ${classes.work_row}`}>
        <div className={classes.work_experience}>
          <p className={classes.title}>Work Experience</p>
          <div className={classes.work_time_line}>
            <div className={classes.company_info}>
            <div className={classes.date}>
              <img src={calendar} alt="calendar" />
              <p>Oct 2020 - Sep 2022</p>
            </div>
              <div className={classes.company_links}>
                <p>Front end developer at</p>
                <a href='#' className={classes.name}> Yara</a>
              </div>
              <p className={classes.description}>a lot of inforamtion come here . to haminja bia angular o react ro benevis b bold ya rangeshon ro avaz kn</p>
            
            </div>

            <div className={classes.company_info}>
            <div className={classes.date}>
              <img src={calendar} alt="calendar" />
              <p>Oct 2020 - Sep 2022</p>
            </div>
              <div className={classes.company_links}>
                <p>Front end developer at</p>
                <a href='#' className={classes.name}> Yara Information technology</a>
              </div>
              <p className={classes.description}>a lot of inforamtion come here . to haminja bia angular o react ro benevis b bold ya rangeshon ro avaz kn</p>
            
            </div>
            


          </div>
        </div>
        <div className={classes.animation}>
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
