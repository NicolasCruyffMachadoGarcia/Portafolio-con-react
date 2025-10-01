import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  const projects = [
    {
      title: "Encriptador",
      description: "Pagina web donde podras encriptar tus mensajes con distintos modelos de encriptacion.",
      link: "https://programaencriptador.netlify.app",
    },
    {
      title: "Biblioteca Web",
      description: "Biblioteca web que te permite ver los distintos tipos de libros por categorias y año, y donde poder leerlo o comprarlo.",
      link: "https://sistemadebiblioteca.netlify.app",
    },
        {
      title: "ModaPelis",
      description: "Proyecto web que te permite ver las reseñas, puntuaciones y trailers de diversas películas.",
      link: "https://github.com/tuusuario/ModaPelis",
    },
        {
      title: "Calculadora de Temperaturas",
      description: "Calculadora web que te permite calcular en distintos tipos de grados.",
      link: "https://calculadoradetemperaturas.netlify.app",
    },
  ];
  

  return (
    <section className="p-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}

export default ProjectGrid;
