import { useState } from "react";
import { ChevronLeft, Github, Menu, Slash, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const navItems = ["home", "about", "projects", "contact"];

  return (
    <header className="sticky top-0 h-20 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-wide flex items-center justify-center gap-1">
          <span className="text-blue-500 w-8"><ChevronLeft className="size-10"/></span>
          <span className="text-xl font-saira ">MAHESH</span>
          <span className="text-blue-500 w-3 translate-y-[2px] -rotate-25 -ml-2"><Slash className="size-7"/></span>
          <span className="text-blue-500 w-8 rotate-180"><ChevronLeft className="size-10"/></span>
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
            <Github className="text-gray-400"/>
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
            <Github/>
            <span>GitHub</span>
          </a>
        </div>
      )}
    </header>
  );
}