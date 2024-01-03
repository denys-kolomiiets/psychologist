import { Container } from '@mui/material';
import services_img from './img/services_img.jpg';
import './style.scss';

export const MyServices = () => {
    return (
        <section className="myServices">
            <Container maxWidth="lg">
                <div className="myServices__title" id="services">
                    <h2>Послуги</h2>
                    <div className="myServices__title_divider" />
                </div>
                <div className="myServices__wrapper">
                    <div className="myServices__img">
                        <img src={services_img} alt="services_img" />
                    </div>
                    <div className="myServices__description">
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui similique illo suscipit
                                voluptates facere ipsum minus ea doloremque illum voluptas! Eius recusandae labore sequi
                                et placeat, nam dignissimos perferendis tempore!
                            </li>
                            <li>
                                Vero iure perspiciatis sequi dolore, totam maiores sed eveniet dolorum similique. Autem
                                nesciunt provident cum soluta, eaque at aliquid inventore necessitatibus maiores labore
                                facere nam possimus. Impedit repudiandae eius obcaecati!
                            </li>
                            <li>
                                Dolore ipsa nisi exercitationem sit praesentium maxime, commodi eligendi aperiam alias
                                fugiat, ipsum explicabo magnam sed repellendus sint esse. Assumenda quisquam consectetur
                                porro nisi! Veritatis dolor laborum illo perspiciatis officia.
                            </li>
                            <li>
                                Perspiciatis eligendi nihil fuga itaque cumque non natus ut atque fugiat, eveniet ea
                                optio! Qui accusamus mollitia aspernatur, eaque sapiente odio enim aliquam ducimus?
                                Impedit aliquam maiores quod neque autem!
                            </li>
                            <li>
                                Excepturi nam ullam labore eligendi maiores consectetur et officiis nemo nulla non
                                laboriosam officia ratione numquam, quisquam temporibus fugit animi debitis? Architecto
                                debitis maiores aliquam nihil molestias aliquid fugiat sequi.
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};
