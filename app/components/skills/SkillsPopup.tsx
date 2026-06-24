import "./skills.scss";

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

export default function SkillsPopup() {
    return (
        <div className="skills__popup flex flex-col gap-5">
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
    )
}