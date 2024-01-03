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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as ScrollLink } from 'react-scroll';

export const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    if (!isBurgerOpen) {
        document.body.style.overflow = 'unset';
    } else {
        document.body.style.overflow = 'hidden';
    }

    const handleOpenBurger = (e) => {
        e.preventDefault();
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <>
            <header className="header">
                <Container maxWidth="xl">
                    <nav autoFocus className={classNames('mobile__menu', { open: isBurgerOpen })}>
                        <div className="mobile__menu_block">
                            <ul className="mobile__list">
                                <li className="mobile__item">
                                    <a href="#about">Про мене</a>
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
                            <div className="mobile__contacts_location">
                                <LocationOnIcon sx={{ color: 'var(--footer-color)' }} />
                                <a
                                    href="https://maps.app.goo.gl/1b1ZKnrK2HQ7vqbR7"
                                    target="_blank"
                                    className="footer__link"
                                    rel="noreferrer"
                                >
                                    м.Київ, вул.Михайлівська, 20Б
                                </a>
                            </div>
                        </div>
                        <div className={classNames('mobile__menu_layout', { active: isBurgerOpen })}></div>
                    </nav>
                    <button className="burger_btn" onClick={handleOpenBurger}>
                        <span className={classNames('burger_item', { open: isBurgerOpen })}></span>
                        <span className={classNames('burger_item', { open: isBurgerOpen })}></span>
                        <span className={classNames('burger_item', { open: isBurgerOpen })}></span>
                    </button>
                    <nav className="header__menu">
                        <ul className="header__menu_list">
                            <li className="header__menu_item">
                                <ScrollLink
                                    style={{ cursor: 'pointer' }}
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    tabIndex={0}
                                >
                                    Про мене
                                </ScrollLink>
                            </li>
                            <li className="header__menu_item">
                                <ScrollLink
                                    style={{ cursor: 'pointer' }}
                                    activeClass="active"
                                    to="blog"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    tabIndex={0}
                                >
                                    Блог
                                </ScrollLink>
                            </li>
                            <li className="header__menu_item">
                                <ScrollLink
                                    style={{ cursor: 'pointer' }}
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    tabIndex={0}
                                >
                                    Послуги
                                </ScrollLink>
                            </li>
                            <li className="header__menu_item">
                                <ScrollLink
                                    style={{ cursor: 'pointer' }}
                                    activeClass="active"
                                    to="price"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    tabIndex={0}
                                >
                                    Ціни
                                </ScrollLink>
                            </li>
                            <li className="header__menu_item">
                                <ScrollLink
                                    style={{ cursor: 'pointer' }}
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    tabIndex={0}
                                >
                                    Контакти
                                </ScrollLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__wrapper">
                        <div className="header__logo_wrapper">
                            <div className="header__logo">
                                <h1 className="header__logo_name">Анна Яцушко</h1>
                                <div className="header__logo_sub">лікар-психолог</div>
                            </div>
                            <AppointmentCard />
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};
