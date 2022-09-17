import React from 'react'
import classes from './about.module.scss';
import github from './../../assest/img/github.png'
import projectPic from './../../assest/img/p.png';
import website from './../../assest/img/web.png';

export default function About() {
  return (
    <div className={classes.about_page} id="project">
      <div className={`${classes.row} ${classes.container}`}>
        <div className={classes.project_title}>
          <p className={classes.title}>
            Latest <br></br>Projects
          </p>
          <div className={classes.project_info}>
            <div className={classes.project_name}>
              <p>Project name -- make this clicable to project website</p>
            </div>
            <p className={classes.project_tech}>React / JS / SCSS / FireBase -- rang ina bar asas logo khode company bashe </p>
            <div className={classes.project_links}>
              <a href="#">
                <img  src={github} alt="github" />
              </a>
              <a href="#">
                <img className={classes.web} src={website} alt="github" />
              </a>
            </div>

            <img className={classes.project_pic} src={projectPic} />
          </div>
        </div>
        <div className={`${classes.project_card} ${classes.health_project}`}>
          <div className={classes.project_info}>
            <div className={classes.project_name}>
              <p>Project name</p>
            </div>
            <p className={classes.project_tech}>React / JS / SCSS / FireBase -- rang ina bar asas logo khode company bashe </p>
            <div className={classes.project_links}>
              <a href="#">
                <img src={github} alt="github" />
              </a>
              <a href="#">
              <img className={classes.web} src={website} alt="github" />
              </a>
            </div>

            <img className={classes.project_pic} src={projectPic} />
          </div>
        </div>
        <div className={`${classes.project_card}`}>
          <div className={classes.project_info}>
            <div className={classes.project_name}>
              <p>Project name</p>
            </div>
            <p className={classes.project_tech}>React / JS / SCSS / FireBase -- rang ina bar asas logo khode company bashe </p>
            <div className={classes.project_links}>
              <a href="#">
                <img src={github} alt="github" />
              </a>
              <a href="#">
              <img className={classes.web} src={website} alt="github" />
              </a>
            </div>

            <img className={classes.project_pic} src={projectPic} />
            <p>all project links come here</p>
          </div>
        </div>

      </div>
    </div>
  )
}
