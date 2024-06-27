"use client";

import React from "react";
import Link from "next/link";
import { FaSeedling } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#e0e0d8] w-full shadow-md">
      <div className="container mx-auto px-4 h-24 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <div className="h-16 w-72">
            <h1 className="text-4xl font-bold flex text-green-400">
              <FaSeedling className="mr-2 text-green-600" />
              Tierra TEC
              <FaSeedling className="mr-2 text-green-600" />
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <button className="inline-flex items-center px-5 py-3 font-semibold leading-6 text-sm shadow rounded-md text-gray-800 bg-gray-300 hover:bg-gray-400 transition ease-in-out duration-150 ring-1 ring-gray-300">
              Notificaciones Activadas
            </button>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out duration-150"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
