import React, { useState } from "react";
import axios from "axios";
import "../App.css"; 
import CurrentTime from "./CurrentTime";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";


export default function Weather() {
   
    const [city, setCity] = useState("London");
    const [searched, setSearched] = useState("London");
    const [temp, setTemp] = useState("0");
    const [description, setDescription] = useState ("Cloudy");
    const [humidity, setHumidity] = useState("50");
    const [wind, setWind] = useState("20");
    const [currentTime, setCurrentTime] = useState("");
    const [icon, setIcon] = useState("04d");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");

    function getData(response){
      console.log(response);
    setTemp (Math.round(response.data.main.temp));
    setDescription (response.data.weather[0].description);
    setHumidity (response.data.main.humidity);
    setWind (Math.round(response.data.wind.speed));
    setSearched (response.data.name);
    setCurrentTime ((response.data.dt) * 1000);
    setIcon(response.data.weather[0].icon);
    setLat(response.data.coord.lat);
    setLon(response.data.coord.lon);
    
 }
    function logSearch(response) {
        setCity(response.target.value);
    }

    function searchCity(event) {
        event.preventDefault();
    const apiKey = `9faf5890d66483fe5ea4c4fc5a185024`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);
}
    return (
        <div>
            <div className="container box whole-app">
        <div className="row row-one">
          <div className="col-lg-12">
          <form className="city-search" onSubmit={searchCity}>
            <input
              type="input"
              id="search_box"
              className="search-box"
              placeholder="Enter City..." onChange={logSearch}
            />
            <input type="button" id="submit-button" value="Search" />
            </form>
        </div>
        <div className="row row-two">
          <div className="col-lg-8 column-one">
            <h1 className="city" id="city">
              {searched}
            </h1>
            <div>
              <WeatherIcon icon={icon} />
            </div>
            <div className="temp-today">
            <Temperature temp={temp}/>
            </div>
            <ul className="details">
               <li className="description" id="description">{description}</li>
                <li className="wind">
                  Wind: <span id="wind">{wind}</span>mph
                </li>
                <li className="humidity">
                  Humidity: <span id="humidity">{humidity}</span>%
                </li>
              </ul>
              </div>
              <div className="col-lg-4 column-two">
                <Forecast city={searched} latitude={lat} longitude={lon}/>
              </div>
          </div>
          </div>
          </div>
      <footer>
         <div className="footer-info">
          <div className="footer1"><a
            href="https://github.com/RebRomBell?tab=repositories"
            className="footer-info"
            rel="noreferer"
          >
            Open-source code
          </a>
          by Rebecca Bell</div>
          <div id="current-time" className="footer2">Last Updated:<CurrentTime date={(new Date(currentTime))} /></div>
          </div>
      </footer>
      </div>
    );
}