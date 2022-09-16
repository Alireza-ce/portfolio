import React, { useEffect, useRef } from 'react'
import classes from './home.module.scss'
import git from './../../assest/img/github.png';
import linkedIn from './../../assest/img/linkedin.png';
import gmail from './../../assest/img/gmail.png';

export default function Home() {
    const scrollList = useRef<any>([]);
    const cursor = useRef<any>(null)

    const handleRef = (node: any) => {
        scrollList.current.push(node)
    }

    const handleScrolling = (type: string, e?: MouseEvent) => {
        let isIn = false;
        scrollList.current.forEach((element: HTMLElement) => {
            if (type === 'scroll') {
                if (element.dataset.scroll === 'vertical') {
                    let pos = window.pageYOffset * Number(element.dataset.rate)
                    element.style.transform = 'translateY(' + pos + 'px)'
                } else {
                    let pos = window.pageYOffset * Number(element.dataset.rate)
                    element.style.transform = `translateX(${pos}px)`
                }
            } else if (e && type === 'mouse') {
                let mouseX = e.pageX;
                let mouseY = e.pageY;
                if (mouseX < element.getBoundingClientRect().right && mouseX > element.getBoundingClientRect().left && mouseY > element.getBoundingClientRect().top && mouseY < element.getBoundingClientRect().bottom) {
                    cursor.current.style.display = 'block';
                    cursor.current.style.left = mouseX + 'px'
                    cursor.current.style.top = mouseY + 'px'
                    isIn = true
                } else if (!isIn) {
                    cursor.current.style.display = 'none';
                }
            }
        });
    }
    useEffect(() => {
        const scrollLister = window.addEventListener('scroll', () => handleScrolling('scroll'))
        const mouseListener = window.addEventListener('mousemove', (e) => handleScrolling('mouse', e))
        return () => {
            window.removeEventListener('scroll', () => handleScrolling('scroll'));
            window.removeEventListener('mousemove', (e) => handleScrolling('mouse', e));
        }
    }, [])

    return (
        <div className={classes.home_page}>
            <div className={classes.cursor} ref={cursor}></div>
            <div className={`${classes.container} ${classes.row}`}>
                <div className={classes.info}>
                    <div className={classes.title_wrapper} >
                        <p className={classes.title} ref={handleRef} data-rate='.1' data-scroll='vertical'>
                            Hi
                        </p>
                    </div>
                    <div className={classes.title_wrapper} >
                        <p className={classes.title} ref={handleRef} data-rate='.2' data-scroll='vertical'>
                            I'm <span className={classes.name}>Alireza</span>
                        </p>
                    </div>
                    <div className={classes.title_wrapper} >
                        <p className={classes.front_text} ref={handleRef} data-rate='.3' data-scroll='vertical'>
                            <span>Front End Developer</span>
                        </p>
                    </div>
                </div>
                <div className={classes.social_links}>
                    <a href='https://github.com/Alireza-ce' target="_blank" >
                        <img src={git} alt="github" />
                    </a>
                    <a href='https://www.linkedin.com/in/alireza-rezaei-ce/'>
                        <img src={linkedIn} alt="linkedin" />
                    </a>
                    <a href="mailto:rezaei.alireza.ce@gmail.com" >
                        <img src={gmail} alt="gmail" />
                    </a>
                </div>
            </div>
            <div className={classes.scroll_down}></div>
        </div>
    )
}
