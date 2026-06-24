'use client'
import { useState } from "react";
import "./skills.scss";
import SkillsPopup from "./SkillsPopup";

export default function Skills() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div 
            className="flex flex-col skills home-page__box"
            onClick={() => setIsPopupOpen(true)}
        >
            <p>Programming</p>
            <p>Frameworks</p>
            <p>Databases</p>
            <p>Tools</p>

        {isPopupOpen && (
            <SkillsPopup />
        )}
        </div>
    )
}