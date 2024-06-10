"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-600 w-full">
      <div className="flex justify-end items-center w-full mx-auto px-4 h-24">
        <div className="flex justify-around w-full">
          <div className="relative">
            <p className="inline-flex items-center px-5 py-3 font-semibold leading-6 text-md shadow rounded-md text-black-500 bg-gray-300 dark:bg-slate-800 transition ease-in-out duration-150 ring-1 ring-slate-900/10 dark:ring-slate-200/20">
              Notificaciones Activadas
            </p>
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <div>
            <Link href={"/"}>
              <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-24 m-2">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
