import ExperienceShow from "./ExperienceShow"
import './About.css';
import 'font-awesome/css/font-awesome.min.css';

function About() {
    return (
        <section className="aboutSection" id="about">
            <div className="aboutDiv">
                <h1>About Me</h1>
                <div className="aboutCard">
                    <p>Hi, I'm Nihal! I'm a software engineering student at the University of Waterloo. Check out some of my <u><a href="#experience" className="textLink">experiences</a></u> and <u><a href="#projects" className="textLink">projects</a></u> below.
                    Feel free to reach out and send me a message <u><a href="mailto:nihal_menon@hotmail.com">here</a></u>!</p>
                    <br/>
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/nihalmenon" target="_blank" rel="noopener noreferrer"><span class="fa fa-linkedin"></span></a>
                        <a href="https://github.com/nihalmenon/" target="_blank" rel="noopener noreferrer"><span class="fa fa-github"></span></a>
                        <a href="mailto:nihal_menon@hotmail.com"><span class="fa fa-envelope"></span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About