import github2 from "../assets/github2.png";
import linkedin from "../assets/linkedin.png";

export const Footer = () => {
  return (
    <footer className="footer items-center p-2 text-black text-lg font-semibold bg-slate-300 absolute bottom-0 ">
      <aside className="items-center grid-flow-col">
        <p>Martin schenone © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://github.com/martinSchenone"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github2} alt="github icon" className="w-8 h-8 " />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-schenone-578241236/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="w-8 h-8" />
        </a>
      </nav>
    </footer>
  );
};
