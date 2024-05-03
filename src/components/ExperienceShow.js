import ExperienceCard from "./ExperienceCard"

function ExperienceShow() {
    const companies = ['BTNX', 'Sun Life']
    const positions = ['Software Developer', 'Software Engineer Intern']
    const durations = ['May 2023 - Aug 2023', 'Jan 2024 - Apr 2024']
    const descriptions = ['I led projects for a global biotechnology company such as enhancing tax calculations by creating web scrapers, designing a new purchase order system, automating data retrieval for inventory reports, developing enhanced login systems for customers, and a range of other impactful initiatives.', 'I worked on the Secure Web Platform team, developing a new Redux Toolkit feature as well as creating a robust GraphQL API.']
    const tools = [['React.js, C#, SQL, Angular, LINQ, Python, Selenium, Razor, Blazor'], ['GraphQL', 'Java Spring Boot', 'Node.js', 'React.js', 'Redux']]

    const experiences = companies.reverse().map((company, index) => {
        const i = companies.length - index - 1;
        return <ExperienceCard company={company} position={positions[i]} description={descriptions[i]} duration={durations[i]} tools={tools[i]} key={i}/>
    })

    return (
        <div>
            {experiences}
        </div>
    )
}

export default ExperienceShow;