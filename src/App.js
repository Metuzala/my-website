import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <Header />

    <main className='main'>
    <Home />
    <About />
    <Skills />
    <Contact />
    <Footer />
    </main>
    </>
  );
}

export default App;
