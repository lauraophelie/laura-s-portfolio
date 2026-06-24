import "./projects.scss";
import { ArrowRightCircle, GitHub } from "@deemlol/next-icons"

interface ProjectCardProps {
    title: string;
    techstack: string[] | string;
    githubLink: string;
    description?: string;
}

export default function ProjectCard({title, techstack, githubLink, description} : ProjectCardProps) {
    return (
        <div className="projects__row__cards">
            <p className="projects__row__cards--title">
                {title}
            </p>
            <p className="projects__row__cards--description">
                {description}
            </p>
            <p className="projects__row__cards--stack">
                {techstack}
            </p>
            <a href={githubLink} target="_blank" className="projects__row__cards--view">
                <p>
                    View Github
                </p>
            </a>
        </div>
    )
}