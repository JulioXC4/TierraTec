"use client";

import React, { useState } from "react";
import Link from "next/link";
import Login from "../Login/Login";
import { usePathname } from "next/navigation";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-600 h-24 flex justify-around items-center shadow-md z-20 px-6">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo TierraTec"
            className="h-16 w-16 rounded-full object-cover mr-4"
          />
          <span className="text-white text-xl font-bold">TierraTec</span>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className={`text-white flex items-center space-x-1 text-xl font-medium hover:text-gray-100 transition-colors duration-300 ${
            pathname === "/" ? "font-bold" : ""
          }`}
        >
          <FaHome className="text-lg" />
          <span>Inicio</span>
        </Link>
        <Link
          href="/about"
          className={`text-white flex items-center space-x-1 text-xl font-medium hover:text-gray-100 transition-colors duration-300 ${
            pathname === "/about" ? "font-bold" : ""
          }`}
        >
          <FaInfoCircle className="text-lg" />
          <span>Objetivo</span>
        </Link>
        <button
          className="py-2 px-4 rounded text-center text-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
          onClick={() => setShowModal(true)}
        >
          Login
        </button>
      </div>
      {showModal && <Login setShowModal={setShowModal} />}
    </nav>
  );
};

export default Navbar;
