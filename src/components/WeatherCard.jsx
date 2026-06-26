const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <h3>{weather.weather[0].main}</h3>

      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;