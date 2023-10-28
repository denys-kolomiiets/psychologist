/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from '@mui/material';
import './style.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { Telegram } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Viber } from '../../icons/ContactIcons';
import { AppointmentCard } from '../AppointmentCard';

export const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleOpenBurger = (e) => {
        e.preventDefault();
        setIsBurgerOpen(!isBurgerOpen);
    };
    return (
        <>
            <header className="header">
                <Container maxWidth="xl">
                    <nav className={classNames('mobile__menu', { open: isBurgerOpen })}>
                        <div className="mobile__menu_block">
                            <ul className="mobile__list">
                                <li className="mobile__item">
                                    <a href="#">Про мене</a>
                                </li>
                                <li className="mobile__item">
                                    <a href="#">Блог</a>
                                </li>
                                <li className="mobile__item">
                                    <a href="#">Послуги</a>
                                </li>
                                <li className="mobile__item">
                                    <a href="#">Ціни</a>
                                </li>
                                <li className="mobile__item">
                                    <a href="#">Контакти</a>
                                </li>
                            </ul>
                            <ul className="mobile__contacts">
                                <li>
                                    <a href="tel:+30962837538">
                                        <PhoneIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/anna_yatsu" target="_blank" rel="noreferrer">
                                        <Telegram />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:annaiatsushko@gmail.com">
                                        <EmailIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="viber://chat?number=%2B380962837538" target="_blank" rel="noreferrer">
                                        <Viber />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={classNames('mobile__menu_layout', { active: isBurgerOpen })}></div>
                    </nav>
                    <button className="burger_btn" onClick={handleOpenBurger}>
                        <span className={classNames('burger', { open: isBurgerOpen })}></span>
                        <span className={classNames('burger', { open: isBurgerOpen })}></span>
                        <span className={classNames('burger', { open: isBurgerOpen })}></span>
                    </button>
                    <nav className="header__menu">
                        <ul className="header__menu_list">
                            <li className="header__menu_item">
                                <a href="#">Про мене</a>
                            </li>
                            <li className="header__menu_item">
                                <a href="#">Блог</a>
                            </li>
                            <li className="header__menu_item">
                                <a href="#">Послуги</a>
                            </li>
                            <li className="header__menu_item">
                                <a href="#">Ціни</a>
                            </li>
                            <li className="header__menu_item">
                                <a href="#">Контакти</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__wrapper">
                        <div className="header__logo">
                            <h1 className="header__logo_name">Анна Яцушко</h1>
                            <div className="header__logo_sub">лікар-психолог</div>
                        </div>
                    </div>
                    <AppointmentCard />
                </Container>
            </header>
        </>
    );
};
