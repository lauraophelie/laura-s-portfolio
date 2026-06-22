import ProjectCard from "./ProjectCard";
import "./projects.scss";

export default function Projects() {
    return (
        <div className="col-span-2 row-span-2 flex flex-col projects home-page__box">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__row flex flex-row gap-4">
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
            </div>
        </div>
    )
}