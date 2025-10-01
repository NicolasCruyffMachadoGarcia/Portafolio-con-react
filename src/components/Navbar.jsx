import React, { useState } from "react";
import react from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-400">Nicolás</h1>

        <ul className="hidden md:flex gap-6 text-gray-200 font-medium">
          <li><a href="#hero" className="hover:text-blue-300">Inicio</a></li>
          <li><a href="#projects" className="hover:text-blue-300">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contacto</a></li>
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
          <a href="#hero" className="block text-gray-200">Inicio</a>
          <a href="#projects" className="block text-gray-200">Proyectos</a>
          <a href="#contact" className="block text-gray-200">Contacto</a>
        </div>
      )}
    </nav>
  );
}
