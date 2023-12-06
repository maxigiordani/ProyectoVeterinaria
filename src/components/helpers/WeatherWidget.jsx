import React, { useState, useEffect } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import axios from "axios";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "4a6d503b013ea6d2a76a2a71181b5be2";
    const city = "TUCUMAN";

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error al obtener datos del clima:", error);
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
        <div className="tiempo">
          <h5>{weatherData.name}</h5>
          <p>
            <FaTemperatureHigh /> {weatherData.main.temp}°C
          </p>
        </div>
      ) : (
        <p>No se pudo obtener la información del clima.</p>
      )}
    </div>
  );
};

export default WeatherWidget;
