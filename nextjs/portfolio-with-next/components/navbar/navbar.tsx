import React from 'react'
import classes from './navbar.module.scss'

export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes.links}>
                    <a href='#work'>Experience</a>
                    <a href='#project'>Projects</a>
                    <a href='#project'>when hover to them draw a background on them like in work experience title</a>
                </div>
            </div>
        </div>
    )
}
