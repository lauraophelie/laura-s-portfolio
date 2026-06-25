import { useRef } from "react";
import "./background.scss";
import Draggable from "react-draggable";

interface EducationBackground {
    degreeTitle: string;
    school: string;
    timeline: string;
}

const educationInfos: EducationBackground [] = [
    {
        degreeTitle: "Master 2 — BIHAR (Big Data & AI)",
        school: "ESTIA Institute of Technology",
        timeline: "Oct. 2025 – now"
    },
    {
        degreeTitle: "Master 1 — Computer Science",
        school: "IT University, Andoharanofotsy",
        timeline: "Dec. 2024 – Sept. 2025"
    },
    {
        degreeTitle: "Bachelor of Science — Computer Science",
        school: "IT University, Andoharanofotsy",
        timeline: "2021 – 2024"
    }
]

interface BackgroundPopupProps {
    isOpen?: boolean;
    onClose: () => void;
}

export default function BackgroundPopup({ onClose } : BackgroundPopupProps ) {
    const handleClosing = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        onClose();
    }
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div className="background__popup flex flex-col" ref={nodeRef}>
                <div 
                    className="background__popup__header" 
                >
                    <p onClick={handleClosing} onTouchStart={handleClosing}>x</p>
                </div>

                <h2 className="background__popup__title">Education</h2>

                <div className="background__popup__details flex flex-col">
                    {educationInfos.map((education, index) => (
                        <div className="background__popup__details__box flex flex-row gap-10" key={index}>
                            <p className="background__popup__details--title">
                                <p> {education.degreeTitle} </p>
                                <p className="background__popup__details--instit">
                                    {education.school}
                                </p>
                            </p>
                            <p className="background__popup__details--timeline">
                                {education.timeline}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Draggable>
    )
}