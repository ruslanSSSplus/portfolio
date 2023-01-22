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
        <div className={classes.all} id="Works">
            <p >
                Мои проекты
            </p>
            <p>

                По клику по ним, откроется новая вкладка с проектом
            </p>
            <div className={classes.projects}>

                {
                    projects.map(project =>
                        <Carousel data-aos={project.anim} >

                            {
                                project.pictures.map(picture =>
                                    <Carousel.Item   onClick={() =>  window.open(project.link)}>
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
    );
};
