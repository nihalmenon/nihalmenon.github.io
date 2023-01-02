import ProjectCard from "./ProjectCard"
// Import images here once available
import foralltimes from '../img/foralltimes.jpg'
import BeTreel from '../img/betreel.jpg'
import Github from '../img/github.jpg'
import trivia from '../img/trivia.png'
import never4get from '../img/never4get.png'

function ProjectShow() {
    const projects = ['ForAllTimes', 'BeTreel', 'Python Breast Cancer Malignance Classifier', 'Python Dementia Expression Classifier', 'Trivia Game', 'never4get']
    const descriptions = ['ForAllTimes is a lounge traffic monitor made for software engineering students at the University of Waterloo. It uses a Raspberry Pi and Ultrasonic sensors to detect when people enter and exit a room. It then updates a counter using an AWS Lambda function. The backend then uses Node.js and Express.js to display this on a website.', 'BeTreel is a proof of concept for a social media app that prompts users to post themselves engaging in environmentally-friendly activities daily. Mimics BeReal\'s concept of one universal notification daily to cue a user to create a post.', 'Python machine learning model using Scikit-learn and pandas that classified tumors as malignant or benign with 90% accuracy based on factors such as cell size, cell uniformity etc. using an online public dataset.', 'Python machine learning model using Scikit-learn and Pandas that predicted whether patients expressed dementia or not based on factors such as mental test scores, intracranial volume, age etc. using a public dataset.', 'This is a simple trivia game using the open trivia API. It was built with jQuery, HTML, and CSS.', 'Never4get is a website that helps you organize all the things you have to do. With an easy to use interface, you can reorder, rename, delete, and check items off as you complete all of your tasks.']
    const links = ['https://foralltimes.cyclic.app', 'https://devpost.com/software/betreel', 'https://github.com/nihalmenon/BreastCancerMalignanceClassifier', 'https://github.com/nihalmenon/Dementia', 'https://nihalmenon.com/trivia', 'https://nihalmenon.com/never4get']

    const imgMap = {
        0: foralltimes,
        1: BeTreel,
        2: Github,
        3: Github,
        4: trivia,
        5: never4get
    }


    const renderedProjects = projects.map((title, index) => {
        return <ProjectCard title={title} description={descriptions[index]} link={links[index]} image={imgMap[index]} key={index}/>
    })

    return (
        <div className="projectBoard">
            {renderedProjects}
        </div>
    )
}

export default ProjectShow