import ExperienceCard from "./ExperienceCard"

function ExperienceShow() {
    const companies = ['BTNX']
    const positions = ['Full-Stack Developer']
    const durations = ['May 2023 - Aug 2023']
    const descriptions = ['I worked on the internal manager site, customer-facing website, and the warehouse app for a biotechnology company with a worldwide presence. I’ve led transformative projects, such as enhancing tax calculations by creating web scrapers, designing a new purchase order system, automating data retrieval for inventory reports, developing enhanced login systems for customers, and a range of other impactful initiatives.']
    const tools = [['React.js, C#, SQL, Angular, LINQ, Python, Selenium, Razor, Blazor']]

    const experiences = companies.map((company, i) => {
        return <ExperienceCard company={company} position={positions[i]} description={descriptions[i]} duration={durations[i]} tools={tools[i]} key={i}/>
    })

    return (
        <div>
            {experiences}
        </div>
    )
}

export default ExperienceShow;