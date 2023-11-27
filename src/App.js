import './App.scss';
import { AboutMe } from './components/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Blog } from './components/Blog';

function App() {
    return (
        <>
            <Header />
            <AboutMe />
            <Blog />
            <Footer />
        </>
    );
}

export default App;
