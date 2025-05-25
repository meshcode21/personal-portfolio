import githubLogo from '../assets/github-mark/github-mark-white.svg';

export default function Navbar() {
  return (
    <div className="w-full h-20 flex items-center justify-center sticky top-0 z-50 backdrop-blur-xs"> 
      {/* Navbar container */}

      <div className="container px-2 h-full m-auto flex items-center border-b-1 border-gray-500/50">
        <div className="w-[20%] text-gray-500">
          <div className="font-semibold flex items-center text-sky-600">
            <div className="text-5xl h-[35px] leading-[24px] ">&#123;</div>
            <div className="text-2xl text-white font-saira">MAHESH</div>
            <div className="text-5xl h-[35px] leading-[24px] ">&#125;</div>
          </div>
        </div>

        <nav className="w-[60%] text-xl font-semibold flex gap-5 justify-center items-center">
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
            className="float-right text-gray-50 text-lg font-semibold border-2 border-gray-400 rounded-3xl flex items-center justify-center gap-2 px-4 py-2"
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
