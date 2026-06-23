import AboutMe from "./components/about/AboutMe";
import Intro from "./components/intro/Intro";
import Copyright from "./components/misc/Copyright";
import Process from "./components/misc/Process";
import Status from "./components/misc/Status";
import Projects from "./components/projects/Projects";
import "./styles/pages/home.scss";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-2 px-2 home-page">
      <main className="grid grid-cols-4 gap-2 w-full h-screen">
        <Intro />
        <AboutMe />
        <div className="bg-blue-500 flex items-center justify-center">box 3</div>
        <div className="bg-blue-500 flex items-center justify-center">box 4</div>
        <Projects />
        <Status />
        <Process />
        <Copyright />
      </main>
    </div>
  );
}
