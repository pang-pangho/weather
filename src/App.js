import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9909cc7187220b5962402b179b5e12fa&units=metric`;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("에러 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByCity = async () => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9909cc7187220b5962402b179b5e12fa&units=metric`;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("에러 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            getCurrentLocation={getCurrentLocation}
            cities={cities}
            setCity={setCity}
            selectedCity={city}
          />
        </div>
      )}
    </div>
  );
}

export default App;
