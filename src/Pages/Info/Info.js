import React, {useRef} from 'react';
import classes from './Info.module.css'
import picDay from '../../assets/logoRuslanDay.png'
import picNight from '../../assets/logoRuslanNight.png'
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import png from '../../assets/kisspng-smiley-emoticon-clip-art-5adcc1944123d1.1561243315244169162668.png'
import { Link } from "react-scroll";


export const Info = ({theme, x, y}) => {

    useEffect(() => {
        console.log('render')
        AOS.init();
    }, [])

    const test1 = useRef(null);
    const test2 = useRef(null);
    const test3 = useRef(null);
    const test4 = useRef(null);
    const test5 = useRef(null);
    const test6 = useRef(null);
    const test7 = useRef(null);
    const test8 = useRef(null);
    const test9 = useRef(null);
    const test0 = useRef(null);

    useEffect(() => {
        if (y > 1200) {
            y = 1000
        }
        test1.current.style.transform = "translate(" + -x * 0.025 + 'px,' + y * 0.025 + 'px)'
        test2.current.style.transform = "translate(" + -x * 0.025 + 'px,' + -y * 0.025 + 'px)'
        test3.current.style.transform = "translate(" + x * 0.025 + 'px,' + y * 0.025 + 'px)'
        test4.current.style.transform = "translate(" + x * 0.025 + 'px,' + -y * 0.025 + 'px)'
        test5.current.style.transform = "translate(" + -x * 0.025 + 'px,' + y * 0.025 + 'px)'
        test6.current.style.transform = "translate(" + -x * 0.025 + 'px,' + -y * 0.025 + 'px)'
        test7.current.style.transform = "translate(" + -x * 0.025 + 'px,' + -y * 0.025 + 'px)'
        test8.current.style.transform = "translate(" + x * 0.025 + 'px,' + y * 0.025 + 'px)'
        test9.current.style.transform = "translate(" + x * 0.025 + 'px,' + -y * 0.025 + 'px)'
        test0.current.style.transform = "translate(" + -x * 0.025 + 'px,' + y * 0.025 + 'px)'
    }, [x, y]);
    return (
        <div className={classes.all2} id="Info">
            <div className={classes.all}>


                <div ref={test1} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '10vh',
                    marginLeft: '35vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',

                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test2} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '9vh',
                    marginLeft: '3vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test3} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '15vh',
                    marginLeft: '15vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test4} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '22vh',
                    marginLeft: '25vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test5} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '25vh',
                    marginLeft: '7vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test6} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '65vh',
                    marginLeft: '30vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test7} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '70vh',
                    marginLeft: '3vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test8} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '72vh',
                    marginLeft: '18vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test9} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '92vh',
                    marginLeft: '7vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>

                <div ref={test0} style={{
                    transform: "translate(0, 0)",
                    transition: "all 1.3s cubic-bezier(0.1, 0.5, 0.5 ,0.9)",
                    marginTop: '90vh',
                    marginLeft: '25vw',
                    position: 'absolute',
                    zIndex: '0',
                    height: '100px',
                    width: '100px',
                }}>
                    <img src={png} className={classes.test}/>
                </div>


                <div className={classes.me}>
                    <p className={classes.text1}>РУСЛАН</p>
                    <p className={classes.text2}>FrontEnd-разработчик</p>
                    <p className={classes.text3}>Js/Ts, React, Redux</p>
                </div>
                <div className={classes.meImg}>
                    {/*<img src={theme === "dark" ? picNight : picDay} className={classes.img}/>*/}
                </div>
                <div className={classes.fu}>
                    <Link to="Works"  spy={true} smooth={false}> Мои работы
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="currentColor"
                             className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                        </svg></Link>


                </div>
            </div>

        </div>
    );
};
