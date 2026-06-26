const Forecast = ({ forecast }) => {

  if (!forecast || !forecast.list) return null;

  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast">

      <h2>5-Day Forecast</h2>

      <div className="forecast-container">

        {dailyForecast.map((day) => (

          <div className="forecast-card" key={day.dt}>

            <p>
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt=""
            />

            <h3>{Math.round(day.main.temp)}°C</h3>

            <p>{day.weather[0].main}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Forecast;