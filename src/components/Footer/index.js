import { Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './style.scss';
import { Telegram } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Viber } from '../../icons/ContactIcons';
export const Footer = () => {
    return (
        <>
            <footer className="footer" id="contacts">
                <Container maxWidth="lg">
                    <div className="footer__wrapper">
                        <div className="footer__contacts">
                            <div className="footer__title">Контакти:</div>
                            <div className="footer__contacts_content">
                                <ul>
                                    <li>
                                        <a href="tel:+30962837538">
                                            <PhoneIcon sx={{ color: 'var(--footer-color)' }} />
                                            <p>+38(096)2837538</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/anna_yatsu" target="_blank" rel="noreferrer">
                                            <Telegram sx={{ color: 'var(--footer-color)' }} />
                                            Telegram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="viber://chat?number=%2B380962837538" target="_blank" rel="noreferrer">
                                            <Viber />
                                            Viber
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:annaiatsushko@gmail.com">
                                            <EmailIcon sx={{ color: 'var(--footer-color)' }} />
                                            annaiatsushko@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__schedule">
                            <div className="footer__title">Графік роботи:</div>
                            <ul>
                                <li>Понеділок-П'ятниця: 9.00-18.00</li>
                                <li>Субота: 10.00-15.00</li>
                                <li>Неділя: вихідний</li>
                            </ul>
                        </div>

                        <div className="footer__adress">
                            <div className="footer__title">Адреса:</div>
                            <div className="footer__adress_content">
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
                    </div>
                </Container>
            </footer>
        </>
    );
};
