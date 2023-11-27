import { Container } from '@mui/material';
import './style.scss';
import anna_img from './img/anna_img.jpg';
export const AboutMe = () => {
    return (
        <>
            <Container maxWidth="lg">
                <div className="about__title" id="about">
                    <h2>Про мене</h2>
                    <div className="about__title_divider"></div>
                </div>
                <div className="about__wrapper">
                    <div className="about__img">
                        <img src={anna_img} alt="anna_img" />
                    </div>
                    <div className="about__description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nemo explicabo
                            reprehenderit ad tempore quos consequatur voluptas dolorum molestiae suscipit animi,
                            praesentium, repudiandae eos quibusdam, laborum qui maiores atque iusto! Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Similique temporibus minima eos omnis nulla velit
                            nobis molestiae? Odit nesciunt nemo asperiores culpa ipsa expedita quas? Natus quia neque
                            minus culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi laboriosam
                            ipsam voluptates harum magnam? Excepturi nihil voluptatem saepe, provident dicta
                            consequuntur sint facilis molestias enim a nisi ut alias ullam. Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Assumenda velit enim id voluptates? Ex ab facere quo soluta
                            distinctio perspiciatis eveniet repudiandae! Fugit eveniet quae iusto aliquam a omnis nam?
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
};
