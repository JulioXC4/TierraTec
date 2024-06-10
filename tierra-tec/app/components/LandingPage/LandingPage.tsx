"use client";

import Link from "next/link";
import React, { useState } from "react";
import Login from "../Login/Login";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-[#D2CABF] min-h-screen w-full flex items-center justify-center">
      <div className="text-black font-mono text-balance flex justify-center items-center w-[75%] h-full">
        <div className="flex flex-col items-center justify-around w-1/2 h-full">
          <p className="lg:text-4xl md:text-3xl font-light mb-10 w-5/6">
            ¿Eres agricultor en Perú? Mantente un paso adelante con nuestro
            seguimiento climático en tiempo real, alertas personalizadas y
            recomendaciones agrícolas específicas. Con Tierratec, podrás
            gestionar los riesgos meteorológicos y mejorar la eficiencia de tu
            cosecha.
          </p>
          <button
            className="mt-2 bg-green-600 text-white text-2xl w-56 h-12 text-center rounded-3xl transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setShowModal(true)}
          >
            Empezar
          </button>
        </div>
        <div className="flex items-center justify-center w-1/2 ">
          <img
            src="/images/agricultura.png"
            alt="Imagen Arbol"
            className="h-[70%] w-[70%] transition duration-300 ease-in-out transform hover:scale-110 "
          />
        </div>
      </div>
      {showModal && <Login setShowModal={setShowModal} />}
    </div>
  );
};

export default LandingPage;
