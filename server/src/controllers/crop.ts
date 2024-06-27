import { Request, Response } from 'express';

const WEATHER_API_KEY = process.env.WEATHER_API;

export const getWeatherByLocation = async (req: Request, res: Response) => {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitud y longitud son requeridos' });
    }
  
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/timezone.json?key=22d4d0a51d0f4e13aec30318242706&q=${lat},${lon}`);
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Error al obtener el clima' });
      }
  
      const weatherData = await response.json();
  
      res.status(200).json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al intentar obtener el clima' });
    }
  };