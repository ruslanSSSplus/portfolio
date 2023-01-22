import React from 'react';
import classes from './NavBar.module.css'
import { Link } from "react-scroll";

export const NavBar = () => {
    return (
        <div className={classes.wrapper} id="NavBar">
            <div className={classes.left}>
                <div className={classes.name}>Ruslan</div>
            </div>
            <div className={classes.right}>
                <div className={classes.list}>
                    <ul style={{ listStyleType: "none" }}>
                        <li className={classes.itemList}>
                            <Link to="Info"  spy={false} smooth={false} >
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link to="Works" spy={true} smooth={false}>
                                Работы
                            </Link>
                        </li>
                        <li>
                            <Link to="Contacts" spy={true} smooth={false}>
                                Контакты
                            </Link>
                        </li>


                    </ul>
                </div>
                <button className={classes.button}><a href="tel:+79636943686" className={classes.num}> Позвонить</a></button>

            </div>
        </div>
    );
};
