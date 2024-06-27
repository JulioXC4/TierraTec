"use client";
import React from "react";
import { FaBullseye, FaCloudSun, FaRegLightbulb } from 'react-icons/fa';
import Navbar from "../components/LandingPage/Navbar";

const About = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="bg-[#D2CABF] min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full px-6 md:px-12 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mb-6 text-gray-800">
              Nuestro Objetivo
            </h1>
            <p className="text-lg md:text-xl text-center md:text-left mb-8 text-gray-700">
              En Tierratec, nuestro objetivo es empoderar a los agricultores del
              Perú con herramientas avanzadas y fáciles de usar para el
              seguimiento del clima y la gestión de riesgos meteorológicos. Nos
              comprometemos a proporcionar información precisa y actualizada
              sobre las condiciones climáticas, alertas personalizadas y
              recomendaciones agrícolas específicas, ayudando a los agricultores
              a proteger sus cultivos, maximizar su rendimiento y promover
              prácticas agrícolas más sostenibles y resilientes.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <FaCloudSun className="text-xl" />
                <p>Seguimiento climático preciso</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <FaBullseye className="text-xl" />
                <p>Alertas personalizadas</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <FaRegLightbulb className="text-xl" />
                <p>Recomendaciones agrícolas</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/images/agricultura.png"
              alt="Imagen Agricultura"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
