import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'TU_CLAVE_DE_API'; // Reemplaza con tu clave de API de OpenWeatherMap
    const city = 'BUENOS AIRES'; // Reemplaza con el nombre de tu ciudad

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error al obtener datos del clima:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando datos del clima...</p>
      ) : weatherData ? (
        <div>
          <h3>Información del clima en {weatherData.name}</h3>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Condiciones: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>No se pudo obtener la información del clima.</p>
      )}
    </div>
  );
};

export default WeatherWidget;
