const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString();

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString();

  return (
    <div className="details-grid">

      <div className="detail-card">
        <h4>Feels Like</h4>
        <p>{weather.main.feels_like}°C</p>
      </div>

      <div className="detail-card">
        <h4>Humidity</h4>
        <p>{weather.main.humidity}%</p>
      </div>

      <div className="detail-card">
        <h4>Wind</h4>
        <p>{weather.wind.speed} m/s</p>
      </div>

      <div className="detail-card">
        <h4>Pressure</h4>
        <p>{weather.main.pressure} hPa</p>
      </div>

      <div className="detail-card">
        <h4>Visibility</h4>
        <p>{weather.visibility / 1000} km</p>
      </div>

      <div className="detail-card">
        <h4>Sunrise</h4>
        <p>{sunrise}</p>
      </div>

      <div className="detail-card">
        <h4>Sunset</h4>
        <p>{sunset}</p>
      </div>

    </div>
  );
};

export default WeatherDetails;