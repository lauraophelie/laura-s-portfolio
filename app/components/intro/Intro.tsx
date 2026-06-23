import "./intro.scss";

function IntroLabel() {
    return (
        <div className="intro__main--label">
            <p>2026</p>
        </div>
    )
}

function IntroTitle() {
    return (
        <h1 className="intro__main--title">
            <span className="intro__main--title__cursive">P</span>
            ort<span className="intro__main--title__cursive">f</span>oli<span className="intro__main--title__bold">o</span>
        </h1>
    )
}

export default function Intro() {
    return (
        <div className="col-span-2 row-span-2 flex flex-col intro home-page__box">
            <div className="intro__welcoming flex flex-row justify-between gap-5">
                <p className="intro__welcoming__text">Hi there☀️</p>
                <p className="intro__welcoming__text">Welcome to my,</p>
            </div>

            <div className="intro__main flex flex-col">
                <IntroTitle />
                <IntroLabel />
            </div>

            <div className="intro__links flex flex-row justify-between">
                <div className="intro__links__content">
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>
                <div className="intro__links__content intro__links__content--left">
                    <p>Email/</p>
                    <p>lauraophelie1@gmail.com</p>
                </div>
            </div>
        </div>
    )
}