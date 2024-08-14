import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const WeatherButton = ({
  getCurrentLocation,
  cities,
  setCity,
  selectedCity,
}) => {
  console.log(selectedCity);
  return (
    <div>
      <Button
        variant={`${selectedCity === null ? "outline-warning" : "warning"}`}
        onClick={() => getCurrentLocation()}
      >
        현재 위치
      </Button>
      {cities.map((item, index) => (
        <Button
          variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
          key={index}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
