import React, { useEffect, useRef } from 'react'
import classes from './home.module.scss'
import git from './../../assest/img/github.png';
import linkedIn from './../../assest/img/linkedin.png';
import gmail from './../../assest/img/gmail.png';

export default function Home() {
    const scrollList = useRef<any>([]);

    const handleRef = (node: any) => {
        scrollList.current.push(node)
    }

    const handleScrolling = () => {
        console.log(scrollList.current)
        scrollList.current.forEach((element: HTMLElement) => {
           if(element.dataset.scroll === 'vertical'){
            let pos = window.pageYOffset * Number(element.dataset.rate)
            element.style.transform = 'translateY(' + pos + 'px)'
           }else{
            let pos = window.pageYOffset * Number(element.dataset.rate)
            element.style.transform = `translateX(${pos}px)`
           }
            
        });
    }
    useEffect(() => {
        const scrollLister = window.addEventListener('scroll', handleScrolling)
        return () => window.removeEventListener('scroll', handleScrolling)
    }, [])

    return (
        <div className={classes.home_page}>
            <div className={`${classes.container} ${classes.row}`}>
                <div className={classes.info}>
                    <div className={classes.title_wrapper} ref={handleRef} data-rate='.1' data-scroll='vertical'>
                        <p className={classes.title} >
                            Hi
                        </p>
                    </div>
                    <div className={classes.title_wrapper} ref={handleRef} data-rate='.2' data-scroll='vertical'>
                        <p className={classes.title}>
                            I'm <span className={classes.name}>Alireza</span>
                        </p>
                    </div>
                    <div className={classes.title_wrapper} ref={handleRef} data-rate='.3' data-scroll='vertical'>
                        <p className={classes.front_text}>
                            <span>Front End Developer</span>
                        </p>
                    </div>
                </div>
                <div className={classes.social_links}>
                    <a href='https://github.com/Alireza-ce' target="_blank" ref={handleRef} data-rate='-.1' data-scroll='horizontal'>
                        <img src={git} alt="github" />
                    </a>
                    <a href='https://www.linkedin.com/in/alireza-rezaei-ce/' ref={handleRef} target="_blank" data-rate='-.15' data-scroll='horizontal'>
                        <img src={linkedIn} alt="linkedin" />
                    </a>
                    <a href="mailto:rezaei.alireza.ce@gmail.com" ref={handleRef} data-rate='-.2' data-scroll='horizontal'>
                        <img src={gmail} alt="gmail" />
                    </a>
                </div>
            </div>
            <div className={classes.scroll_down}></div>
        </div>
    )
}
