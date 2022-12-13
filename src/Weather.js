import React, { useState } from "react";
import axios from "axios";
import "./App.css"; 

export default function Weather() {
   
    const [city, setCity] = useState("London");
    const [searched, setSearched] = useState("London");
    const [temp, setTemp] = useState("0");
    const [description, setDescription] = useState ("Cloudy");
    const [humidity, setHumidity] = useState("50");
    const [wind, setWind] = useState("20");


    function getData(response){
    console.log(response.data);
    setTemp (Math.round(response.data.temperature["current"]));
    setDescription (response.data.condition["description"]);
    setHumidity (response.data.temperature["humidity"]);
    setWind (Math.round(response.data.wind["speed"]));
    setSearched (response.data["city"]);
 }
    function logSearch(response) {
        setCity(response.target.value);
    }

    function searchCity(event) {
        event.preventDefault();
    const apiKey = "0t2105f1dc833abd4d72b4f0503d9bao";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);
}
    return (
        <div>
            <div className="container box whole-app">
        <div className="row row-one">
          <form className="col city-search" onSubmit={searchCity}>
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
          <div className="col-lg-6 column-one">
            <h1 className="city" id="city">
              {searched}
            </h1>
            <div>
                <img className="weather-icon" src="images/04d.png" alt="weather icon"></img>
            </div>
            <div
              className="btn-group btn-group-toggle buttons"
              data-toggle="buttons"
            >
              <label className="btn btn-secondary" id="temp-button1">
                <input type="radio" name="options" id="option1"  /> °C
              </label>
              <label className="btn btn-secondary" id="temp-button2">
                <input type="radio" name="options" id="option2"  /> °F
              </label>
            </div>
            <div className="temp-today">
              <p>{temp}°</p>
            </div>
          </div>
          </div>
          <div className="col-lg column-two">
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
          <div id="current-time" className="footer2">Last Updated:</div></div>
      </footer>
      </div>
    );
}