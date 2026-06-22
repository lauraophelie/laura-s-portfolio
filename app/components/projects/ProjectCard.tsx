import "./projects.scss";
import { ArrowRightCircle } from "@deemlol/next-icons"

interface ProjectCardProps {
    title: string;
    techstack: string[] | string;
}

export default function ProjectCard({title, techstack} : ProjectCardProps) {
    return (
        <div className="projects__row__cards">
            <p className="projects__row__cards--title">
                {title}
            </p>
            <p className="projects__row__cards--stack">
                {techstack}
            </p>
            <ArrowRightCircle 
                size={50} 
                fill="true" 
                color="#85C2FF" 
                strokeWidth={0.5}
                className="projects__row__cards--arrow"
            />
        </div>
    )
}