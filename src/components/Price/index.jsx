import { Container } from '@mui/material';
import price_img from './img/contacts_img.jpeg';
import './style.scss';

export const Price = () => {
    return (
        <section className="price">
            <Container maxWidth="lg">
                <div className="price__title" id="price">
                    <h2>Ціни</h2>
                    <div className="price__title_divider" />
                </div>
                <div className="price__wrapper">
                    <div className="price__description">
                        <h2>Вартість послуг лікаря-психолога складає:</h2>
                        <ul>
                            <li>
                                Консультація - <b>1500</b>грн/сесія (50 хвилин)
                            </li>
                            <li>
                                Онлайн-консультація - <b>1500</b>грн/сесія (50 хвилин)
                            </li>
                            <li>
                                Сеанс психотерапії - <b>2500</b>грн/сеанс (50 хвилин)
                            </li>
                            <li>
                                Психологічна діагностика - <b>2000</b>грн
                            </li>
                            <li>
                                Проведення психологічних тренінгів - <b>3000</b>грн
                            </li>
                        </ul>
                        <h3>Прийом лікаря проводиться виключно у робочий час та за попереднім записом!</h3>
                    </div>
                    <div className="price__img">
                        <img src={price_img} alt="price_img" />
                    </div>
                </div>
            </Container>
        </section>
    );
};
