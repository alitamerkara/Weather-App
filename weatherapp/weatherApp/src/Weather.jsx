import React from "react";

const Weather = ({ sonuc }) => {
  return (
    <>
      <div className="weather">
        <h6>{sonuc.name}</h6>
        <h1>{Math.floor(sonuc.main.temp)}°C</h1>
        <h4>{sonuc.weather[0].description}</h4>
        <h5>
          {Math.floor(sonuc.main.temp_min)}°C {" / "}
          {Math.floor(sonuc.main.temp_max)}
          °C
        </h5>
      </div>
    </>
  );
};

export default Weather;
