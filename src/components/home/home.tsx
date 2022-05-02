import React from 'react'
import classes from './home.module.scss'

export default function Home() {
    return (
        <div className={classes.home_page}>
            <div >
                <div className={classes.title_wrapper}>
                    <p className={classes.title}>
                        Hi
                    </p>
                </div>
                <div className={classes.title_wrapper}>
                    <p className={classes.title}>
                        I'm <span className={classes.name}>Alireza</span>
                    </p>
                </div>
                <div className={classes.title_wrapper}>
                    <p className={classes.front_text}>
                        <span>Front End Developer</span> 
                    </p>
                </div>
            </div>
        </div>
    )
}
