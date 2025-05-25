import githubLogo from '../assets/github-mark/github-mark-white.svg';

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-center">
      {/* Navbar container */}

      <div className="w-11/12 h-15 m-auto flex items-center pl-2 pr-2 border-b-1 border-gray-300">
        <div className="w-[20%] text-gray-500">
          <div className="font-semibold flex items-center">
            <div className="text-5xl h-[35px] leading-[24px] ">&#123;</div>
            <div className="text-2xl text-sky-600">MAHESH</div>
            <div className="text-5xl h-[35px] leading-[24px] ">&#125;</div>
          </div>
        </div>

        <nav className="w-[60%] text-xl text-gray-700 font-semibold flex gap-5 justify-center items-center">
          <a href="#home" className="hover:border-b border-gray-600 px-1">
            Home
          </a>
          <a href="#about" className="hover:border-b border-gray-600 px-1">
            About
          </a>
          <a href="#projects" className="hover:border-b border-gray-600 px-1">
            Projects
          </a>
          <a href="#contact" className="hover:border-b border-gray-600 px-1">
            Contact
          </a>
        </nav>

        <div className="w-[20%]">
          <a
            href="#"
            className="float-right bg-gray-700 text-white text-lg font-semibold rounded-xl flex items-center justify-center gap-2 px-4 py-2"
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
