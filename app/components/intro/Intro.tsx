import "./intro.scss";

export default function Intro() {
    return (
        <div className="col-span-2 row-span-2 flex intro home-page__box">
            <div className="intro__welcoming flex justify-between gap-5">
                <p className="intro__welcoming__text">Hi there☀️</p>
                <p className="intro__welcoming__text">Welcome to my,</p>
            </div>
            {/* <h1 className="intro__main-title">Portfolio</h1> */}
        </div>
    )
}