'use client'
import React, { useState } from "react";
import Login from "../Login/Login";
import { FaTemperatureHigh, FaBell, FaRegLightbulb } from 'react-icons/fa';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#D2CABF] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full px-6 md:px-12 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mb-6 text-gray-800">
            Bienvenido a Tierratec
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left mb-8 text-gray-700">
            ¿Eres agricultor en Perú? Mantente un paso adelante con nuestro
            seguimiento climático en tiempo real, alertas personalizadas y
            recomendaciones agrícolas específicas. Gestiona los riesgos
            meteorológicos y mejora la eficiencia de tu cosecha con Tierratec.
          </p>
          <button
            className="bg-green-600 hover:bg-green-700 text-white text-2xl md:text-3xl py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setShowModal(true)}
          >
            Empezar
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/images/agricultura.png"
            alt="Imagen Agricultura"
            className="w-full h-auto rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
      {showModal && <Login setShowModal={setShowModal} />}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-gray-700">
        <FaTemperatureHigh className="text-xl" />
        <p>Seguimiento climático en tiempo real</p>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-gray-700">
        <FaBell className="text-xl" />
        <p>Alertas personalizadas</p>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-gray-700">
        <FaRegLightbulb className="text-xl" />
        <p>Recomendaciones agrícolas</p>
      </div>
    </div>
  );
};

export default LandingPage;
