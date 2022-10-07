import React from 'react'
import classes from './footer.module.scss'

export default function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.links}>
                    <a href='mailto:rezaei.alireza.ce@gmail.com'>Rezae.Alireza.CE@gmail.com</a>
                    <a href='#'>© 2022 All Right Reserved</a>
                </div>
            </div>
        </div>
    )
}
