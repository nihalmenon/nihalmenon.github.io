import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Projects from './components/Projects'


function App() {
    return (
    <div id='container'>
        <Intro/>
        <About />
        <Experience />
        <Projects/>
        <Footer />
    </div>
    )
}

export default App