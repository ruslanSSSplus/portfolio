import React from 'react';
import classes from './Info.module.css'
import pic from '../../assets/logoRuslanDay.png'
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export const Info = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={classes.all} id="Info">
            <div className={classes.me}>
                <p className={classes.text1}>Привет!</p>
                <p className={classes.text2}>Меня зовут Руслан</p>
                <p className={classes.text3}>И я FrontEnd-разработчик</p>
            </div>
            <div className={classes.meImg} >
                <img src={pic} className={classes.img} />
            </div>
        </div>
    );
};
