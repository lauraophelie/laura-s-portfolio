import Copyright from "./components/misc/Copyright";
import Process from "./components/misc/Process";
import Status from "./components/misc/Status";
import "./styles/pages/home.scss";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-2 px-2 home-page">
      <main className="grid grid-cols-4 gap-2 w-full h-screen">
        <div className="bg-blue-500 col-span-2 row-span-2 text-center flex items-center justify-center home-page__box">box 1</div>
        <div className="bg-blue-500 col-span-2 text-center flex items-center justify-center">box 2</div>
        <div className="bg-blue-500 flex items-center justify-center">box 3</div>
        <div className="bg-blue-500 flex items-center justify-center">box 4</div>
        <div className="bg-blue-500 col-span-2 row-span-2 flex items-center justify-center">box 5</div>
        <Status />
        <Process />
        <Copyright />
      </main>
    </div>
  );
}
