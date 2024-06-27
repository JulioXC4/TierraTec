import React from 'react';
import { FaTemperatureHigh, FaExclamationCircle, FaTint, FaEdit, FaTrash } from 'react-icons/fa';
import { FaSeedling } from 'react-icons/fa';
const crops = [
  {
    id: 1,
    nombre: 'Tomate',
    temperatura: '20°C - 25°C',
    alerta: 'Baja',
    aguaRequerida: 'Moderada',
    humedadOptima: 'Alta',
    luzSolarNecesaria: 'Alta',
    tipoSuelo: 'Fértil',
  },
  {
    id: 2,
    nombre: 'Maíz',
    temperatura: '18°C - 30°C',
    alerta: 'Media',
    aguaRequerida: 'Alta',
    humedadOptima: 'Media',
    luzSolarNecesaria: 'Alta',
    tipoSuelo: 'Bien drenado',
  },
  {
    id: 3,
    nombre: 'Papa',
    temperatura: '10°C - 20°C',
    alerta: 'Alta',
    aguaRequerida: 'Alta',
    humedadOptima: 'Alta',
    luzSolarNecesaria: 'Media',
    tipoSuelo: 'Fértil',
  },
  {
    id: 4,
    nombre: 'Fresa',
    temperatura: '15°C - 25°C',
    alerta: 'Baja',
    aguaRequerida: 'Moderada',
    humedadOptima: 'Alta',
    luzSolarNecesaria: 'Alta',
    tipoSuelo: 'Bien drenado',
  },
];

const CropList = () => {
  return (
    <div className='flex flex-col bg-[#D2CABF] items-center w-full'>
      <div className='m-4 w-full'>
      <h1 className="text-3xl font-bold mb-4 flex items-center ml-8">
          <FaSeedling className="mr-2 text-green-600" />
          Cultivos
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {crops.map(crop => (
            <div key={crop.id} className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-between w-5/6 mx-auto">
              <div className="flex flex-col">
                <div className="mb-2">
                  <h2 className="text-lg font-bold">{crop.nombre}</h2>
                  <div className="flex items-center">
                    <FaTemperatureHigh className="mr-2 text-gray-600" />
                    <p className="text-sm">Temperatura Zona: {crop.temperatura}</p>
                  </div>
                  <div className="flex items-center">
                    <FaExclamationCircle className="mr-2 text-yellow-600" />
                    <p className="text-sm">Alerta: {crop.alerta}</p>
                  </div>
                  <div className="flex items-center">
                    <FaTint className="mr-2 text-blue-600" />
                    <p className="text-sm">Agua Requerida: {crop.aguaRequerida}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex-1">
                    <p className="text-xs font-semibold">Humedad Óptima:</p>
                    <p className="text-sm">{crop.humedadOptima}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold">Luz Solar Necesaria:</p>
                    <p className="text-sm">{crop.luzSolarNecesaria}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold">Tipo de Suelo:</p>
                    <p className="text-sm">{crop.tipoSuelo}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                  <FaEdit className="mr-1" />
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center">
                  <FaTrash className="mr-1" />
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropList;
