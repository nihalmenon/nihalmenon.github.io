import ExperienceShow from "./ExperienceShow"
import './About.css';
import 'font-awesome/css/font-awesome.min.css';

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experienceDiv">
                <h1>Experience</h1>
                <ExperienceShow />
            </div>
        </section>
    )
}

export default Experience