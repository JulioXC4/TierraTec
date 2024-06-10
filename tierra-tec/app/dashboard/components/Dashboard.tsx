"use client";

import React, { useState, useEffect } from "react";

import LoadingScreen from "@/app/components/LoadingScreen";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchs = async () => {
      try {
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchs();
  }, []);
  if (loading) return <LoadingScreen />;
  return (
    <div className="flex flex-col bg-[#D2CABF]  w-full h-[90vh]">
      <div className="m-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>
        <p className="text-lg text-center mb-8">
          ¡Bienvenido al panel! Aquí podrás gestionar tus cultivos.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
