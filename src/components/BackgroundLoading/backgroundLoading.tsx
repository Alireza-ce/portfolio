import { motion } from 'framer-motion'
import React from 'react'
import classes from './backgroundLoading.module.scss'

type BackgroundLoadingType = {
    backgroundColor: string;
    zIndex: number;
    delay: number
}
export default function BackgroundLoading({ backgroundColor, delay, zIndex }: BackgroundLoadingType) {
    return (
        <motion.div className={classes.loadingPage} initial={{ backgroundColor, zIndex }} animate={{ height: 0, y: '100vh' }} transition={{ delay, duration: 1, type: 'tween' }} />
    )
}
