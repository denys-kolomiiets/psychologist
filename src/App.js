import './App.scss';
import { AboutMe } from './components/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Blog } from './components/Blog';
import { FloatingActionButton } from './components/FloatingActionButton';
import { MyServices } from './components/MyServices';
import { Price } from './components/Price';
import { FeedbackForm } from './components/FeedbackForm';

function App() {
    return (
        <>
            <Header />
            <AboutMe />
            <Blog />
            <MyServices />
            <Price />
            <FeedbackForm />
            <Footer />
            <FloatingActionButton />
        </>
    );
}

export default App;
