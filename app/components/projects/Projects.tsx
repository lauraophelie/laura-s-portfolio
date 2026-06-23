import ProjectCard from "./ProjectCard";
import "./projects.scss";
interface Project {
    title: string;
    techstack: string;
    githubLink: string;
    status?: string;
}

const projectsData: Project[] = [
    {
        title: "Study café",
        techstack: "Python",
        githubLink: "https://github.com/lauraophelie/study-cafe-py-app"
    },
    {
        title: "Services exchange",
        techstack: "Spring Boot, PostgreSQL",
        githubLink: "https://github.com/lauraophelie/servicesechanges"
    },
    {
        title: "Document signature",
        techstack: "Django, HTML",
        githubLink: "https://github.com/lauraophelie/crypto-document-signature"
    }
]

export default function Projects() {
    return (
        <div className="col-span-2 row-span-2 flex flex-col projects home-page__box">
            {/* <h1 className="projects__title">Projects</h1>
            <div className="projects__row flex flex-row gap-4">
                { {projectsData.map((project, index) => (
                    <ProjectCard 
                        key={project.title + index}
                        title={project.title} 
                        techstack={project.techstack} 
                    />
                ))} }
                <ProjectCard 
                    title={"Project title"} 
                    techstack={"Tech stack, Tech stack, Tech stack"} 
                />
                <ProjectCard 
                    title={"Project title"} 
                    techstack={"Tech stack, Tech stack, Tech stack"} 
                />
                <ProjectCard 
                    title={"Project title"} 
                    techstack={"Tech stack, Tech stack, Tech stack"} 
                />
            </div> */}
        </div>
    )
}