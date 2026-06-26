import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch weather by city
  const fetchWeatherByCity = async (city) => {
    try {
      setLoading(true);

      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      setWeather(weatherRes.data);
      setForecast(forecastRes.data);
    } catch (error) {
      alert("City not found");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather using current location
  const fetchWeatherByLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        setLoading(true);

        const { latitude, longitude } = position.coords;

        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );

        const forecastRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );

        setWeather(weatherRes.data);
        setForecast(forecastRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    });
  };

  // Load current location weather when app starts
  useEffect(() => {
    fetchWeatherByLocation();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <SearchBar
        onSearch={fetchWeatherByCity}
        onLocation={fetchWeatherByLocation}
      />

      {loading ? (
        <Loader />
      ) : (
        <>
          <WeatherCard weather={weather} />
          <WeatherDetails weather={weather} />
          <Forecast forecast={forecast} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;