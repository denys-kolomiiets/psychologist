import { Container } from '@mui/material';
import './style.scss';
import blog_img from './img/Blog_img.jpg';

export const Blog = () => {
    return (
        <div className="blog">
            <Container maxWidth="lg">
                <div className="blog__title" id="blog">
                    <h2>Блог</h2>
                    <div className="blog__title_divider"></div>
                    <div className="blog__wrapper">
                        <article className="blog__article">
                            <h2 className="blog__article_title">Коли варто звернутися до психолога?</h2>
                            <div className="blog__article_content">
                                <img src={blog_img} alt="blog_img" className="blog__article_img" />
                                <p className="blog__article_text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam, at
                                    dignissimos, magnam obcaecati vero rerum tempora repellat consectetur fugiat in,
                                    soluta velit! At velit ab dolor quibusdam cum? Earum! Sequi officia ut quidem libero
                                    molestias animi, ipsa unde numquam repellat ipsum atque quam, et est pariatur
                                    voluptas, beatae possimus id praesentium! Possimus nostrum rem tempora, perspiciatis
                                    quia nam sapiente. Qui, optio incidunt cum ullam similique magnam obcaecati
                                    doloribus unde fugit culpa voluptates sint quas dolore, natus quidem quasi neque
                                    reprehenderit dolores ipsa possimus dicta dolorum fugiat tempora nisi! Quod! Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Nisi ab aspernatur magnam.
                                    Architecto saepe porro perferendis obcaecati labore veritatis facilis, quis optio
                                    nam unde dolor facere velit illum aliquam dignissimos. A beatae corporis sapiente
                                    consectetur dolorem veniam id eum quaerat quidem maxime, iste tenetur inventore
                                    nulla, aut sequi alias non fugit ut. Voluptas culpa facere odio nemo aspernatur.
                                    Facere, doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Nesciunt in voluptatibus at porro! Tempora delectus repudiandae labore deleniti
                                    minima quos perspiciatis ducimus sequi, quia ullam quibusdam cum, quisquam,
                                    distinctio commodi. Illo, deleniti perferendis. Nulla iste laboriosam suscipit
                                    adipisci repudiandae, quidem magnam sint dolores veniam esse corporis, provident
                                    placeat dicta sunt pariatur accusantium quasi. Saepe cumque suscipit et. Neque,
                                    excepturi eum. Nam hic cumque eaque iusto aut repellendus amet accusamus non soluta?
                                    Quidem eveniet deserunt repudiandae voluptates a explicabo nobis. Rerum adipisci
                                    placeat accusamus minima, quo assumenda? Totam fuga distinctio quasi? Temporibus
                                    eaque quidem ullam repellendus harum doloremque ipsam accusamus deserunt, et modi
                                    quia maiores esse tempora molestias illum laudantium fugit aspernatur. Similique eos
                                    consequatur earum. Sed quaerat est at veritatis. Distinctio veritatis dicta
                                    delectus. Deserunt ex aperiam dicta voluptas dolores rerum autem quidem cumque
                                    ducimus provident ipsam temporibus nostrum obcaecati alias velit, minima error
                                    dignissimos similique nobis officia magni eius! Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Officiis explicabo odit cum, unde dicta tenetur id.
                                    Rerum illo aliquam, dolore ratione repellendus ipsa aperiam molestias tenetur soluta
                                    nisi quod voluptatibus. Sapiente ipsa impedit doloremque assumenda voluptatibus
                                    cumque voluptatem dolorum suscipit totam, quas amet possimus quibusdam neque iure
                                    culpa. Modi facere porro, minima voluptatem nisi harum! Id numquam explicabo nostrum
                                    provident. Deserunt saepe inventore hic sunt, quos fugit cum molestias quis eum odit
                                    at maiores dolorem. Aperiam quo alias odit quisquam tempora? Maiores quam quas
                                    sapiente eum quod aperiam qui ipsum? Itaque non obcaecati reiciendis? Facere rem
                                    magni illum necessitatibus tenetur fugit, aperiam sint voluptate eligendi ratione?
                                    Ut earum ullam, sequi amet, consequuntur nobis odio expedita assumenda culpa
                                    praesentium, nisi exercitationem. Quaerat explicabo quis, excepturi, veritatis ullam
                                    quisquam eveniet sint saepe, sequi hic est deleniti alias nesciunt totam laudantium
                                    omnis molestiae deserunt aliquam. Assumenda labore error similique necessitatibus
                                    facilis magnam ullam.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Container>
        </div>
    );
};
