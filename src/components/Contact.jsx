import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setStatus("Enviando...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mvgwajal", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("✅ Mensaje enviado con éxito. ¡Gracias por contactarme!");
        e.target.reset();
      } else {
        setStatus("❌ Ocurrió un error, intenta nuevamente.");
      }
    } catch (error) {
      setStatus("⚠️ Error de conexión.");
    }
  };

  return (
    <section id="contacto" className="py-20 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-8">📩 Contáctame</h2>
      <form
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Tu mensaje"
          className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition w-full"
        >
          Enviar mensaje
        </button>
      </form>

      {status && (
        <p className="mt-6 text-lg text-green-400 font-medium">{status}</p>
      )}
    </section>
  );
};

export default Contact;
