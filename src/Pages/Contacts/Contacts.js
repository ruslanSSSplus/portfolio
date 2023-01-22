import React from 'react';
import classes from './Contacts.module.css'
import mail from  '../../assets/mail.png'
import tg from '../../assets/telega.png'
import wa from '../../assets/watsapp.png'
import vk from '../../assets/vkontakte.png'



export const Contacts = () => {

    return (
        <div className={classes.all} id="Contacts">
            <a className={classes.block}  href="https://t.me/ruslan228">
                <img src={tg} className={classes.image}/>
                <p>
                   Telegram
                </p>
            </a>
            <a className={classes.block} href="mailto:ruslanlyanov1999@gmail.com">
                <img src={mail} className={classes.image} />
                <p>
                    Ruslanlyanov1999@gmail.com
                </p>
            </a>
            <a className={classes.block} href=" https://vk.com/lgbtvoin">
                <img src={vk} className={classes.image}/>
                <p>
                    VK
                </p>
            </a>
            <a className={classes.block} href="https://wa.me/79636943686">
                <img src={wa} className={classes.image}/>
                <p>
                   WhatsApp
                </p>
            </a>
        </div>
    );
};

