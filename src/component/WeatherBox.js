import React from "react";

const WeatherBox = ({ weather }) => {
  const Fahrenheit = weather && weather.main.temp * 1.8 + 32;
  console.log(weather);
  return (
    <div className="weather-box">
      <div>{weather && weather.name}</div>
      <h2>
        {weather && weather.main.temp} /{Fahrenheit} 화씨
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
