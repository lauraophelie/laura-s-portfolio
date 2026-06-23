import AboutMe from "./components/about/AboutMe";
import Background from "./components/background/Background";
import Intro from "./components/intro/Intro";
import Copyright from "./components/misc/Copyright";
import Process from "./components/misc/Process";
import Status from "./components/misc/Status";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import "./styles/pages/home.scss";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-2 px-2 home-page">
      <main className="grid grid-cols-4 gap-2 w-full h-screen">
        <Intro />
        <AboutMe />
        <Skills />
        <Background />
        <Projects />
        <Status />
        <Process />
        <Copyright />
      </main>
    </div>
  );
}
