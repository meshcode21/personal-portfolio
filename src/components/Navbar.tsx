import { useState } from "react";
import { Menu, X } from "lucide-react";
import githubLogo from "../assets/github-mark/github-mark-white.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const navItems = ["home", "about", "projects", "contact"];

  return (
    <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-wide flex items-center gap-1">
          <span className="text-4xl text-blue-500 font-mono">&#123;</span>
          <span className="text-xl font-saira">MAHESH</span>
          <span className="text-4xl text-blue-500 font-mono">&#125;</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300 font-semibold text-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize hover:text-white hover:underline underline-offset-4 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* GitHub Button */}
        <div className="hidden md:flex">
          <a
            href="https://github.com/meshcode21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-gray-400 text-white px-4 py-2 rounded-full hover:border-white transition"
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6 pt-4 text-center space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="block text-white text-lg font-medium hover:underline"
            >
              {item}
            </a>
          ))}

          <a
            href="https://github.com/meshcode21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gray-400 text-white px-4 py-2 rounded-full hover:border-white transition"
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      )}
    </header>
  );
}



// import githubLogo from '../assets/github-mark/github-mark-white.svg';

// export default function Navbar() {
//   return (
//     <div className={`w-full h-20 flex items-center justify-center sticky top-0 z-50 backdrop-blur-xs bg-black/30`}> 
//       {/* Navbar container */}

//       <div className="container px-2 h-full m-auto flex items-center border-b-1 border-gray-500/50">
//         <div className="w-[20%] text-gray-500">
//           <div className="font-semibold flex items-center text-sky-600">
//             <div className="text-5xl h-[35px] leading-[24px] ">&#123;</div>
//             <div className="text-2xl text-white font-saira">MAHESH</div>
//             <div className="text-5xl h-[35px] leading-[24px] ">&#125;</div>
//           </div>
//         </div>

//         <nav className="w-[60%] text-xl font-semibold flex gap-5 justify-center items-center">
//           <a href="#home" className="hover:border-b border-gray-600 px-1">
//             Home
//           </a>
//           <a href="#about" className="hover:border-b border-gray-600 px-1">
//             About
//           </a>
//           <a href="#projects" className="hover:border-b border-gray-600 px-1">
//             Projects
//           </a>
//           <a href="#contact" className="hover:border-b border-gray-600 px-1">
//             Contact
//           </a>
//         </nav>

//         <div className="w-[20%]">
//           <a
//             href="#"
//             className="float-right text-gray-50 text-lg font-semibold border-2 border-gray-400 rounded-3xl flex items-center justify-center gap-2 px-4 py-2"
//           >
//             <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
//             <span>GitHub</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
