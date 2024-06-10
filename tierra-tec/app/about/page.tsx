"use client";
import React from "react";
import Navbar from "../components/LandingPage/Navbar";

const About = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="bg-[#D2CABF] min-h-screen w-full flex items-center justify-center">
        <div className="text-black font-mono text-balance flex justify-center items-center w-[75%] h-full">
          <div className="flex flex-col items-center justify-around w-1/2 h-full">
            <h1 className="lg:text-3xl md:text-2xl font-light mb-10 w-5/6">
              Nuestro objetivo
            </h1>
            <p className="lg:text-2xl md:text-2xl font-light mb-10 w-5/6">
              En Tierratec, nuestro objetivo es empoderar a los agricultores del
              Perú con herramientas avanzadas y fáciles de usar para el
              seguimiento del clima y la gestión de riesgos meteorológicos. Nos
              comprometemos a proporcionar información precisa y actualizada
              sobre las condiciones climáticas, alertas personalizadas y
              recomendaciones agrícolas específicas, ayudando a los agricultores
              a proteger sus cultivos, maximizar su rendimiento y promover
              prácticas agrícolas más sostenibles y resilientes.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/2 ">
            <img
              src="/images/agricultura.png"
              alt="Imagen Arbol"
              className="h-[70%] w-[70%] transition duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
