import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 md:bg-white/40 bg-transparent md:backdrop-blur-xl backdrop-blur-none md:border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-[0.15em] text-primary hover:text-accent transition">
          Chandu
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <a href="#about" className="hover:text-accent transition">
            About
          </a>
          <a href="#skills" className="hover:text-accent transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-accent transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="/Hema_Chandu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-primary/20 text-sm tracking-wide transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent"
          >
            View Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClose}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-2xl shadow-2xl border-l border-black/5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-6 py-5 border-b border-black/5">
          <button
            onClick={handleClose}
            className="text-sm font-medium tracking-wide hover:text-accent transition"
          >
            close ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8 text-sm tracking-wide">
          <a href="#about" onClick={handleClose} className="hover:text-accent transition">
            About
          </a>
          <a href="#skills" onClick={handleClose} className="hover:text-accent transition">
            Skills
          </a>
          <a href="#projects" onClick={handleClose} className="hover:text-accent transition">
            Projects
          </a>
          <a href="#contact" onClick={handleClose} className="hover:text-accent transition">
            Contact
          </a>

          <a
            href="/Hema_Chandu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="mt-4 px-6 py-3 rounded-full border border-primary/20 text-center transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
