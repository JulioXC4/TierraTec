"use client";

import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div>
        <h1 className="text-gray-500 text-5xl font-medium m-4">Administrador</h1>
      </div>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-600 m-4"></div>
    </div>
  );
};

export default LoadingScreen;