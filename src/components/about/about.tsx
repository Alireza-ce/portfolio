import React from 'react'
import classes from './about.module.scss';
import github from './../../assest/img/github.png'
import projectPic from './../../assest/img/pulsesensor.png';
import pacmanPic from './../../assest/img/pacman.jpg';
import expenses from './../../assest/img/expenses.jpg';
import website from './../../assest/img/web.png';
import heart from './../../assest/img/heart.png';
import pacman from './../../assest/img/pacman.png';
import budget from './../../assest/img/budget.png';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className={classes.about_page} id="project">
      <div className={`${classes.row} ${classes.container}`}>
        <div className={classes.project_title}>
          <p className={classes.title}>
            Latest <br></br>Projects
          </p>
          <motion.div className={classes.project_info} initial={{ scale: 0 }} transition={{delay:0, type: 'spring', duration: 1.5 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
            <div className={classes.project_name}>
              <p>Heart Rate Analysis System</p>
              <img  src={heart} />
            </div>
            <p className={classes.project_tech}> Angular / Node js</p>
            <div className={classes.project_links}>
              <a href="https://github.com/Alireza-ce/pulse-sensor-with-arduino" target="_blank">
                <img  src={github} alt="github" />
              </a>
            </div>

            <img className={classes.project_pic} src={projectPic} />
          </motion.div>
        </div>
        <motion.div className={`${classes.project_card} ${classes.health_project}`} initial={{ scale: 0 }} transition={{delay:0.5, type: 'spring', duration: 1.5 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
          <div className={classes.project_info}>
            <div className={classes.project_name}>
              <p>Pacman</p>
              <img  src={pacman} />
            </div>
            <p className={classes.project_tech}> JS / CSS</p>
            <div className={classes.project_links}>
              <a href="https://github.com/Alireza-ce/pacman-javascript" target="_blank">
                <img src={github} alt="github" />
              </a>
              <a href="https://pacman-clone-js.netlify.app/" target="_blank">
              <img className={classes.web} src={website} alt="pacman" />
              </a>
            </div>

            <img className={classes.project_pic} src={pacmanPic} />
          </div>
        </motion.div>
        <motion.div className={`${classes.project_card}`} initial={{ scale: 0 }} transition={{delay:0.7, type: 'spring', duration: 1.5 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
          <div className={classes.project_info}>
            <div className={classes.project_name}>
              <p>Expenses Management</p>
              <img  src={budget} />
            </div>
            <p className={classes.project_tech}>React / React Query /  SCSS / FireBase </p>
            <div className={classes.project_links}>
              <a href="https://github.com/Alireza-ce/expenses-management" target="_blank">
                <img src={github} alt="github" />
              </a>
            </div>
            <img className={classes.project_pic} src={expenses} />
          </div>
        </motion.div>

      </div>
    </div>
  )
}
