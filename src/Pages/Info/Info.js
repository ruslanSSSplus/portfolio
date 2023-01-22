import React, {useRef} from 'react';
import classes from './Info.module.css'
import picDay from '../../assets/logoRuslanDay.png'
import picNight from '../../assets/logoRuslanNight.png'
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import png from '../../assets/kisspng-smiley-emoticon-clip-art-5adcc1944123d1.1561243315244169162668.png'

export const Info = ({theme, x, y}) => {

    console.log(x, y)
    useEffect(() => {
        console.log('render')
        AOS.init();
    }, [])

    const test = useRef(null);
    useEffect(() => {
        // if(Math.abs(a  - x ))
        test.current.style.transform = "translate(0" + x * 0.1 + 'px,' + y * 0.1 + 'px)'
        // let a = x
        // let b = y
    }, [x, y]);
    return (
        <div className={classes.all} id="Info">
            <div ref={test} style={{
                transform: "translate(0, 0)",
                transition: "all .3s ease-out",
                marginTop: '200px',
                marginLeft: '200px',
                position: 'absolute',
                zIndex: '0',
                height: '100px',
                width: '100px',

            }}>
                <img src={png} className={classes.test}/>
            </div>


            <div className={classes.me}>
                <p className={classes.text1}>Привет!</p>
                <p className={classes.text2}>Меня зовут Руслан</p>
                <p className={classes.text3}>И я FrontEnd-разработчик</p>
            </div>
            <div className={classes.meImg}>
                <img src={theme === "dark" ? picNight : picDay} className={classes.img}/>
            </div>
        </div>
    );
};
