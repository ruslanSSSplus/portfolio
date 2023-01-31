import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-scroll";
import classes from "./NavBar.module.css";
import React from "react";
import {Toggle} from "../Toggle/Toggle";

export const NavBar = ({handleLightThemeClick, handleDarkThemeClick, theme}) => {

    return (
        <Navbar className={classes.header} expand="lg" sticky="top" id="NavBar" variant={theme === 'dark' ? 'dark' : 'light'}>
            <Container>
                {/*<a href="tel:+79636943686" className={classes.num}> Ruslan</a>*/}
                <Navbar.Brand >    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  className={classes.tg}/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav  className={classes.right}>
                        <Link to="NavBar" className={classes.itemList} spy={true} smooth={false} >Главная</Link>
                        <Link to="Works" className={classes.itemList} spy={true} smooth={false} >Работы</Link>
                        <Link to="Works" className={classes.itemList} spy={true} smooth={false} >Обо мне</Link>
                        <Link to="Contacts" className={classes.itemList} spy={true} smooth={false} >Контакты</Link>
                        <div className={classes.toggle2}>
                            <Toggle handleDarkThemeClick={handleDarkThemeClick} handleLightThemeClick={handleLightThemeClick}/>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <div className={classes.toggle}>
                    <Toggle handleDarkThemeClick={handleDarkThemeClick} handleLightThemeClick={handleLightThemeClick}/>
                </div>

            </Container>
        </Navbar>
    );
}
