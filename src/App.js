import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
function App() {
  //앱 실행되자마자 현재위치기반의 날씨가 보인다
  // 날씨정보에는 도시, 섭씨, 화씨 날씨상태정보
  // 및에는 5개의 버튼이 있다. 1개는 현재위치, 4개는 다른도시
  // 도시 클릭시 다른 그 도시 정보가 나오고
  // 현재 위치 버튼 누르면 다시 현재위치 기반의 날씨가 나온다.
  // 데이터를 들고오는 동안 로딩 스피너가 돈다.
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      geWeatherByCorrentLocation(lat, lon);
    });
  };
  const getAnotherLocation = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9909cc7187220b5962402b179b5e12fa&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };
  const geWeatherByCorrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9909cc7187220b5962402b179b5e12fa&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton
          getCurrentLocation={getCurrentLocation}
          getAnotherLocation={getAnotherLocation}
        />
      </div>
    </div>
  );
}

export default App;
