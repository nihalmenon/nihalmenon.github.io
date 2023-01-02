
function ProjectCard({ title, description, link, image }) {
    return (
    <div className="projectCard">
        <div className='left'>
            <img src={image} className="img"/>
        </div>
        <div className='right'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='buttons'>
                <div className='button'><a href={link}>Visit</a></div>    
            </div>
        </div>
    </div>
    )
}

export default ProjectCard