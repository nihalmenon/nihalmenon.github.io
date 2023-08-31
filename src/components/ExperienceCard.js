

function ExperienceCard({ company, position, duration, description, tools }) {
    return (
        <div className="experienceCard">
            <h3>{position} @ <span style={{color:'rgba(0,255,255,0.7)'}}>{company}</span></h3>
            <p>{duration}</p>
            <p>{description}</p>
            <p className="tools"><strong>Tools and Languages:</strong> {tools.join(', ')}</p>
        </div>
    )
}

export default ExperienceCard;