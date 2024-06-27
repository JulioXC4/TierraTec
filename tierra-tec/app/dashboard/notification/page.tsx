import React from 'react';
import { FaBell, FaExclamationTriangle, FaRegLightbulb, FaBug, FaCloudUploadAlt } from 'react-icons/fa';

const notifications = [
  {
    id: 1,
    tipo: 'Notificación',
    mensaje: 'Se ha detectado una plaga en los tomates. Aplicar tratamiento insecticida.',
    icono: <FaBug className="text-red-600" />,
    detalles: [
      { label: 'Cultivo afectado:', valor: 'Tomates' },
      { label: 'Acción recomendada:', valor: 'Aplicar tratamiento insecticida' },
    ],
  },
  {
    id: 2,
    tipo: 'Recomendación',
    mensaje: 'Ajustar el riego de los maíces debido a la temporada de sequía.',
    icono: <FaCloudUploadAlt className="text-blue-600" />,
    detalles: [
      { label: 'Cultivo afectado:', valor: 'Maíces' },
      { label: 'Detalles:', valor: 'Riego ajustado debido a sequía' },
    ],
  },
  {
    id: 3,
    tipo: 'Notificación',
    mensaje: 'Alerta por heladas esta noche. Proteger las papas con cobertores.',
    icono: <FaExclamationTriangle className="text-yellow-600" />,
    detalles: [
      { label: 'Cultivo afectado:', valor: 'Papas' },
      { label: 'Acción recomendada:', valor: 'Proteger con cobertores' },
    ],
  },
  {
    id: 4,
    tipo: 'Recomendación',
    mensaje: 'Incrementar la humedad en las fresas para mejorar la calidad del cultivo.',
    icono: <FaRegLightbulb className="text-green-600" />,
    detalles: [
      { label: 'Cultivo afectado:', valor: 'Fresas' },
      { label: 'Acción recomendada:', valor: 'Incrementar humedad' },
    ],
  },
];

const NotificationList = () => {
  return (
    <div className='flex flex-col bg-[#D2CABF] items-center w-full h-[90vh]'>
      <div className='m-4 w-full'>
        <h1 className="text-3xl font-bold mb-4 flex items-center ml-8">
          <FaBell className="mr-2 text-yellow-300" />
          Notificaciones y Recomendaciones
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {notifications.map(notification => (
            <div key={notification.id} className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-between w-5/6 mx-auto">
              <div className="flex flex-col">
                <div className="mb-2">
                  <div className="flex items-center mb-1">
                    {notification.icono}
                    <h2 className="text-lg font-bold ml-2">{notification.tipo}</h2>
                  </div>
                  <p className="text-sm">{notification.mensaje}</p>
                </div>
                <div className="flex flex-col gap-1">
                  {notification.detalles.map((detalle, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-xs font-semibold mr-1">{detalle.label}</span>
                      <span className="text-sm">{detalle.valor}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* Puedes agregar más iconos aquí si es necesario */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
