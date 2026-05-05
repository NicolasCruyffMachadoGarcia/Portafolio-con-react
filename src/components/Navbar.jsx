import React, { useState } from "react";
import react from "react";
export default function Navbar({ onNavigate, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <button 
          onClick={() => handleNavClick("home")}
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer"
        >
          Portafolio de Nicolas Cruyff Machado Garcia
        </button>

        <ul className="hidden md:flex gap-6 text-gray-200 font-medium">
          <li>
            <button 
              onClick={() => handleNavClick("home")}
              className={`hover:text-blue-300 ${currentPage === "home" ? "text-blue-400" : ""}`}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick("home")}
              className="hover:text-blue-300"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick("contact")}
              className={`hover:text-blue-300 ${currentPage === "contact" ? "text-blue-400" : ""}`}
            >
              Contacto
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 px-6 py-4 space-y-3">
          <button onClick={() => handleNavClick("home")} className="block text-gray-200 w-full text-left hover:text-blue-300">Inicio</button>
          <button onClick={() => handleNavClick("home")} className="block text-gray-200 w-full text-left hover:text-blue-300">Proyectos</button>
          <button onClick={() => handleNavClick("contact")} className="block text-gray-200 w-full text-left hover:text-blue-300">Contacto</button>
        </div>
      )}
    </nav>
  );
}
