import "./style.scss";

const cvLink = "https://drive.google.com/file/d/1S9BO-YOGNeLK1tYx9dCj3etMu5en2quh/view?usp=sharing";

function GetCVButton() {
    return (
        <a href={cvLink} target="_blank">
            <button className="status--get-button">
                See my CV
            </button>
        </a>
    )
}

export default function Status() {
    return (
        <div className="justify-center status home-page__box">
            <p className="status__text">Currently</p>
            <p className="status__text">Open to</p>
            <p className="status__text">Work</p>

            <GetCVButton />
        </div>
    )
}