"use client";

import React, { useState, useEffect } from "react";
import { FaChartBar, FaSeedling, FaBell } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement);

import LoadingScreen from "@/app/components/LoadingScreen";

const cultivos = [
  { nombre: 'Tomate', cantidad: 50 },
  { nombre: 'Maíz', cantidad: 30 },
  { nombre: 'Papa', cantidad: 40 },
  { nombre: 'Fresa', cantidad: 25 },
];

const notificaciones = [
  { tipo: 'Notificación', cantidad: 3 },
  { tipo: 'Recomendación', cantidad: 2 },
];

const data = {
  labels: cultivos.map(cultivo => cultivo.nombre),
  datasets: [
    {
      label: 'Cantidad de Cultivos',
      backgroundColor: '#3182CE',
      borderColor: '#3182CE',
      borderWidth: 1,
      hoverBackgroundColor: '#63B3ED',
      hoverBorderColor: '#63B3ED',
      data: cultivos.map(cultivo => cultivo.cantidad),
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-[#D2CABF] p-6 rounded-lg shadow-md h-[90vh]">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        <FaChartBar className="mr-2 text-blue-600" />
        Resumen General
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Estadísticas de Cultivos */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaSeedling className="mr-2 text-green-600" />
            Estadísticas de Cultivos
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cultivo
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cantidad
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cultivos.map(cultivo => (
                  <tr key={cultivo.nombre} className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cultivo.nombre}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cultivo.cantidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Estadísticas de Notificaciones */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaBell className="mr-2 text-yellow-300" />
            Estadísticas de Notificaciones
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cantidad
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 divide-y divide-gray-200">
                {notificaciones.map(notificacion => (
                  <tr key={notificacion.tipo} className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{notificacion.tipo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notificacion.cantidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Gráfico de Barras */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-full lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaChartBar className="mr-2 text-blue-600" />
            Gráfico de Cultivos
          </h2>
          <div className="mt-4">
            <Bar
              data={data}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;