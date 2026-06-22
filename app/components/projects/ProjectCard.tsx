import "./projects.scss";

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
        </div>
    )
}