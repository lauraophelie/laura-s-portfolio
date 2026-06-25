import "./about.scss";

interface AboutMeProps {
    label: string;
    info: string;
}

function AboutMeInfo({ label, info } : AboutMeProps) {
    return (
        <div className="about-me__infos__box flex flex-row gap-15">
            <p className="about-me__infos__box__label">
                {label} /
            </p>
            <p className="about-me__infos__box__info">
                {info}
            </p>
        </div>
    )
}

const infos = {
    name: "Laura Ophélie RASOLONANDRASNA",
    title: "Msc Student in Big Data & AI, Fullstack Developer",
    location: "Antananarivo, Madagascar",
    motiv: "My main motivation is to use my technical & creative skills to build meaningful projects"
}

export default function AboutMe() {
    return (
        <div className="col-span-2 flex flex-col gap-4 about-me home-page__box">
            <h1 className="about-me__title">
                About me
            </h1>

            <div className="about-me__infos flex flex-col gap">
                <AboutMeInfo label={"Name"} info={infos.name} />
                <AboutMeInfo label={"Title"} info={infos.title} />
                <AboutMeInfo label={"Location"} info={infos.location} />
            </div>
        </div>
    )
}