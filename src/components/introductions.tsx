'use client'
import {LazyMotion, m} from "framer-motion"
import Link from 'next/link'
import styles from '@/assets/styles/Home.module.css'
import ContactIcons from "./contact_icons"

const loadFeatures = () =>
    import ('./features.js').then(res => res.default)

const Intro = () => {
    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };
    const items = {
        hidden: {opacity: 0, y: 90},
        show: {opacity: 1, y: 0, transition: {duration: .4}}
    };


    return (
        <LazyMotion features={loadFeatures}>
            <m.section
                className={styles.introduction}
                variants={container}
                initial="hidden"
                animate="show">
                <m.h1 variants={items}>
                    <span>Hey, my name is </span>
                    <br/>Philip Adewole
                </m.h1>

                <m.p variants={items} className={styles.intro}>I`m a <span>software developer</span> primarily focused
                    on <span>frontend development</span> using web technology.
                    Always open to learning new things and currently exploring the decentralised web and MERN stack web
                    development.
                </m.p>
                <m.p variants={items} className={styles.available}>
                    <span>👇🏾</span> Currently open to opportunities
                </m.p>

                <m.div variants={items} className={styles.contact_intro}>
                    <ContactIcons/>
                </m.div>

                {/*Button styling credit : Codrops --> https://tympanus.net/Development/ButtonHoverStyles/ */}
                <Link href="https://drive.google.com/file/d/1SspjX3pFynhnzA1uL6TS9pNRYAyIwdCu/view?usp=sharing"
                      passHref target="blank">
                        <div className={styles.content__item}>
                            <m.button variants={items} className={[styles.button, styles.button__bestia].join(' ')}>
                                <div className={styles.button__bg}></div>
                                <span>Check out my Resume</span>
                            </m.button>
                        </div>
                </Link>
            </m.section>
        </LazyMotion>
    )
}

export default Intro