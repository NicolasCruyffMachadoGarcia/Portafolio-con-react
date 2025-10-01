import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="pt-12 pb-16">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-white">
            👋 Hola, soy <span className="text-blue-400">Nicolas</span>
          </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Estudiante de <span className="text-blue-400 font-semibold">Ingeniería de Software</span> en la Universidad Tecnológica del Perú, actualmente en el noveno ciclo.  
          Me apasiona el desarrollo web y tengo conocimientos en <span className="text-blue-400">HTML, CSS, JavaScript, React, SQL y MySQL</span>.  
          Me gusta crear páginas web modernas y funcionales.
        </p>

          <a
            href="#contacto" //  lleva directo al formulario
            className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Contáctame
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center">
        <img 
          src="https://avatars.githubusercontent.com/u/146007697?v=4" 
          alt="avatar" 
          className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl ring-4 ring-blue-400/30"
        />

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
