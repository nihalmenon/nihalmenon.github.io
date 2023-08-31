import ProjectShow from "./ProjectShow"
import './Projects.css'

function Projects() {
    return (
        <section className="projectSection" id="projects">
            <div className="projectDiv">
                <h1 >Projects</h1>
                <ProjectShow/>
            </div>
        </section>
    )
}

export default Projects