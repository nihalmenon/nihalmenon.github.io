import './Intro.css'

function Intro() {
    return (
        <section className='intro'>
            <header>
                <h1><span>I'm Nihal Menon</span>, <br/>a software engineer. Here's some of my <u><a href="#projects">work</a></u>.</h1>
            </header>
            <nav>
                <a href="https://github.com/nihalmenon">Github</a>
                <a href="https://linkedin.com/in/nihalmenon">LinkedIn</a>
            </nav>
        </section>
    )
}
export default Intro