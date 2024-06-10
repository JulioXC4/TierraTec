"use client";

import React, {useState} from "react";
import Link from "next/link";
import Login from "../Login/Login";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="fixed bg-green-600 w-full h-24 flex justify-around items-center shadow-md z-20">
      <div className="w-1/3flex items-center">
        <Link className="text-black text-xl font-bold" href="/">
          <img
            src="/images/logo.png"
            alt="Logo TierraTec"
            className="h-20 w-20 rounded-full object-cover transition-transform transform hover:scale-105"
          />
        </Link>
      </div>
      <div className="w-2/3 flex justify-end items-center">
        <div className="flex justify-evenly items-center w-5/6">
          <Link
            href="/"
            className={`py-2 rounded-3xl text-center text-3xl hover:text-white w-0 hover:w-6 transition-all duration-500 ${
              pathname === "/"
                ? "text-white py-2 rounded-3xl text-center text-3xl"
                : "text-black"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className={`py-2 rounded-3xl text-center text-3xl hover:text-white w-0 hover:w-6 transition-all duration-500 ${
              pathname === "/about"
                ? "text-white py-2 rounded-3xl text-center text-3xl"
                : "text-black"
            }`}
          >
            Objetivo
          </Link>
          <button
            className="py-2 px-4 rounded text-center text-3xl bg-blue-600 text-white "
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        </div>
        {showModal && <Login setShowModal={setShowModal} />}
      </div>
    </nav>
  );
};

export default Navbar;
