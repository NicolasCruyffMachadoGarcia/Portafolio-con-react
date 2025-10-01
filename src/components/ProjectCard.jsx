import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-gray-800 text-gray-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Ver proyecto →
      </a>
    </div>
  );
}

export default ProjectCard;
