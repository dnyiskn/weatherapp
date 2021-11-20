import axios from "axios";
import { useState, useEffect } from "react";

const Item = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      setWeatherData(data.data);
    }

    if (weatherData === null) getData();
    console.log(weatherData);
  }, [weatherData, city]);

  return (
    <>
      {weatherData ? (
        <div className="itemContainer">
          <h1>{weatherData.name}</h1>
          <h2>{weatherData.main.temp}&deg;C</h2>
          <p>Feels like: {weatherData.main.feels_like}&deg;C</p>
          <p>Forecast: {weatherData.weather[0].main}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Item;
