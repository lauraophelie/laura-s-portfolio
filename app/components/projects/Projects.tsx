import ProjectCard from "./ProjectCard";
import "./projects.scss";

interface Project {
    title: string;
    techstack: string;
    githubLink: string;
    description?: string;
    status?: string;
}

const projectsData: Project[] = [
    {
        title: "Study café App",
        techstack: "Python, Aseprite",
        githubLink: "https://github.com/lauraophelie/study-cafe-py-app",
        description: "A pixel game inspired python application in which you can study and interact with other friend; built using pygame, socket & tkinter"
    },
    {
        title: "Classification Titanic",
        techstack: "Python, Jupyter Notebook",
        githubLink: "https://github.com/lauraophelie/classification-titanic-tp",
        description: "A machine learning exercise using classification to visualize, evaluate a Decision Tree and a Random Forest from a dataset."
    },
    {
        title: "Document signature",
        techstack: "Django, HTML, Jupyter Notebook",
        githubLink: "https://github.com/lauraophelie/crypto-document-signature",
        description: "A django web application made to upload and sign documents using RSA cryptography using key pairs"
    }
]

export default function Projects() {
    return (
        <div className="col-span-2 row-span-2 flex flex-col gap-3 projects home-page__box">
            <div className="projects__texts flex flex-row gap-3 justify-between items-end">
                <h1 className="projects__title">Selected Projects</h1>
                <a href="https://github.com/lauraophelie/" target="_blank" className="projects__texts__link">
                    View all projects →
                </a>
            </div>

            <div className="projects__row flex flex-row gap-2">
                {projectsData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        techstack={project.techstack} 
                        githubLink={project.githubLink}  
                        description={project.description}              
                    />
                ))}
            </div>
        </div>
    )
}