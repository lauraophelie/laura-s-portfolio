import "./skills.scss";
import SkillsPopup from "./SkillsPopup";

export default function Skills() {
    return (
        <div className="flex flex-col skills home-page__box">
            <p>Programming</p>
            <p>Frameworks</p>
            <p>Databases</p>
            <p>Tools</p>

            <SkillsPopup />
        </div>
    )
}