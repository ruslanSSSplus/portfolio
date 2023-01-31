import React, {useEffect} from 'react';
import classes from './Works.module.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {projects} from './dataBase/dataBase'


export const Works = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="Works">
        <div className={classes.all}>
            <div className={classes.text}>
                <p className={classes.text1}>
                    Мои проекты
                </p>
                <p className={classes.text2}>
                    По клику по ним, откроется новая вкладка с проектом
                </p>
            </div>

            <div className={classes.projects}>

                {
                    projects.map(project =>
                        <Carousel data-aos={project.anim} data-aos-delay={'300'} data-aos-duration={'700'} key={project.name} className={classes.container}>

                            {
                                project.pictures.map(picture =>
                                    <Carousel.Item   onClick={() =>  window.open(project.link)} key={picture} className={classes.container}>
                                    <img
                                        className={classes.img}
                                        src={picture}
                                        alt="First slide"
                                    />

                                </Carousel.Item>)
                            }



                        </Carousel>)
                }


            </div>

        </div>
        </section>
    );
};
