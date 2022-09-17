import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useRef } from 'react'
import calendar from './../../assest/img/schedule.png';
import reactLogo from './../../assest/img/reactlogo.png';
import AngularLogo from './../../assest/img/angular.png';
import nextjs from './../../assest/img/nextjs.png';
import tsLogo from './../../assest/img/ts.png';
import jsLogo from './../../assest/img/javascript.png';
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
              <p>Jun 2022 - Present</p>
            </div>
              <div className={classes.company_links}>
                <p>Front end developer at</p>
                <a href='https://tapsi.ir/' className={classes.name} target="_blank"> TAPSI</a>
              </div>            
            </div>

            <div className={classes.company_info}>
            <div className={classes.date}>
              <img src={calendar} alt="calendar" />
              <p>Oct 2020 - Mar 2022</p>
            </div>
              <div className={classes.company_links}>
                <p>Front end developer at</p>
                <a href='https://yaramobile.com/' className={classes.name} target="_blank"> Yara</a>
              </div>            
            </div>
            <div className={classes.company_info}>
            <div className={classes.date}>
              <img src={calendar} alt="calendar" />
              <p>Sep 2019 - Sep 2020</p>
            </div>
              <div className={classes.company_links}>
                <p>Front end developer at</p>
                <a href='#' className={classes.name}> D.B. Solution</a>
              </div>            
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
          <div className={classes.skills}>
            <div className={classes.skills_image}>
                <div className={classes.skills_item}>
                    <img src={reactLogo} />
                </div>
                <div className={classes.skills_item}>
                    <img src={nextjs} />
                </div>
                <div className={classes.skills_item}>
                    <img src={AngularLogo} />
                </div>
                <div className={classes.skills_item}>
                    <img src={jsLogo} />
                </div>
                <div className={classes.skills_item}>
                    <img src={tsLogo} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
