import "./style.scss";

const cvLink = "https://drive.google.com/file/d/1es0cg-vDuCU__jG2MCFyG9vEKrQrx6ta/view?usp=sharing";

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