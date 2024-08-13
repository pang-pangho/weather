import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const WeatherButton = ({ getCurrentLocation, getAnotherLocation }) => {
  return (
    <div>
      <Button variant="warning" onClick={() => getCurrentLocation()}>
        현재 위치
      </Button>{" "}
      <Button variant="warning" onClick={() => getAnotherLocation("Vietnam")}>
        베트남
      </Button>{" "}
      <Button variant="warning" onClick={() => getAnotherLocation("Honolulu ")}>
        호놀룰루
      </Button>{" "}
    </div>
  );
};

export default WeatherButton;
