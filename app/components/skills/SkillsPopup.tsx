import Draggable from "react-draggable";
import "./skills.scss";
import { useRef } from "react";

const skillsData = [
    {
        title: "Programming Languages",
        content: "Python, Java, JavaScript, TypeScript, PHP, pl/pgSQL, Dart, Kotlin, C#, Groovy"
    },
    {
        title: "Frameworks",
        content: "Django, Django REST, Spring Boot, React, Next.js, Angular, Vue.js, Ionic, Flutter, Node.js"
    },
    {
        title: "Tools",
        content: "Git, Postman, Jupyter Notebook, Android Studio, Unity 3D, Figma, Adobe XD, Adobe Photoshop, Aseprite"
    },
    {
        title: "ML / DL / Big Data",
        content: "scikit-learn, tensorflow, pandas, numpy, Hadoop"
    },
    {
        title: "Languages",
        content: "Malagasy (native), French, English"
    }
]

interface SkillsPopupProps {
    isOpen?: boolean;
    onClose: () => void
}

export default function SkillsPopup({ onClose } : SkillsPopupProps ) {
    const handleClose = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        onClose()
    }
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div className="skills__popup flex flex-col gap-5" ref={nodeRef}>
                <div 
                    className="skills__popup__header"
                    onClick={handleClose}
                >
                    x
                </div>
                {skillsData.map((skill, index) => (
                    <div className="skills__popup__details" key={index}>
                        <p className="skills__popup__details--title"> 
                            {skill.title}
                        </p>
                        <p className="skills__popup__details--content">
                            {skill.content}
                        </p>
                    </div>
                ))}
            </div>
        </Draggable>
    )
}