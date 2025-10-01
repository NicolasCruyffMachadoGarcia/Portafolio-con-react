import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="pt-28 px-6 md:px-20">
        <Hero />
        <h1 className="text-4xl md:text-6xl font-extrabold text-center my-16">
          🚀 Mis Proyectos
        </h1>
        <ProjectGrid />

        {}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
