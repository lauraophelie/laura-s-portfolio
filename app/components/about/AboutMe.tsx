import "./about.scss";

const infos = {
    name: "Laura Ophélie RASOLONANDRASNA",
    title: "Fullstack Developer",
    study: "Msc Student, specialized in Big Data & AI",
    location: "Based in Antananarivo, Madagascar",
    motiv: "My main motivation is to use my technical & creative skills to build meaningful projects"
}

export default function AboutMe() {
    return (
        <div className="col-span-2 flex about-me home-page__box">
            I am {infos.name} / {infos.title} / {infos.study} / {infos.location} / {infos.motiv}
        </div>
    )
}