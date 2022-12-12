import React, { useState } from "react";
import axios from "axios";
import "./App.css"; 

export default function Weather() {
    const [temp, setTemp] = useState("");
    const [description, setDescription] = useState ("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    function getData(response){
    console.log(response);
    setTemp (Math.round(response.data.temperature["current"]));
    setDescription (response.data.condition["description"]);
    setHumidity (response.data.temperature["humidity"]);
    setWind (Math.round(response.data.wind["speed"]));
 }

    let city ="Miami";
    const apiKey = "0t2105f1dc833abd4d72b4f0503d9bao";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);

    return (
        <div>
            <div className="container box whole-app">
        <div className="row row-one">
          <div className="col city-search">
            <input
              type="input"
              id="search_box"
              className="search-box"
              placeholder="Enter City..."
            />
            <input type="button" id="submit-button" value="Search" />
            <submit id="current-location" />
            <i className="fa-solid fa-location-crosshairs fa-lg"></i>
          </div>
        </div>
        <div className="row top-row">
          <div className="col-lg-3 column-one">
            <h1 className="city" id="city">
              Glasgow
            </h1>
            <h3 className="current_time" id="current-time">
              Last Updated:
              <br />
            </h3>
            <div>
              <ul className="details">
                <li className="description"><span id="description">Description: </span>{description}</li>
                <li className="wind">
                  Wind: <span id="wind">{wind}</span>mph
                </li>
                <li className="humidity">
                  Humidity: <span id="humidity">{humidity}</span>%
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 column-two">
            <div
              className="btn-group btn-group-toggle buttons"
              data-toggle="buttons"
            >
              <label className="btn btn-secondary" id="temp-button1">
                <input type="radio" name="options" id="option1" /> °C
              </label>
              <label className="btn btn-secondary" id="temp-button2">
                <input type="radio" name="options" id="option2" /> °F
              </label>
            </div>
            <br />
            <div className="temp-today">
              <p>{temp}°</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="today_box">
              <section className="today_first">
                <div className="row align-items-start border-dark">
                  <div className="col time" id="today-first-time">
                    09:00
                  </div>
                  <div className="col image">
                    <img
                      id="today-first-img"
                      src={"/images/02d.png"}
                      alt="weather icon illustration"
                      className="images_9am"
                      width="37px"
                    />
                  </div>
                  <div className="col" id="today-first-temp">
                    16°
                  </div>
                </div>
              </section>
              <section className="today_second">
                <div className="row align-items-start">
                  <div className="col" id="today-second-time">
                    12:00{" "}
                  </div>
                  <div className="col">
                    <img
                      id="today-second-img"
                      src={"/images/02d.png"}
                      alt="weather icon illustration"
                      className="image_12pm"
                      width="37px"
                    />
                  </div>
                  <div className="col" id="today-second-temp">
                    20°{" "}
                  </div>
                </div>
              </section>
              <section className="today_third">
                <div className="row align-items-start">
                  <div className="col" id="today-third-time">
                    15:00{" "}
                  </div>
                  <div className="col">
                    <img
                      id="today-third-img"
                      src={"/images/01d.png"}
                      alt="weather icon illustration"
                      className="image_3pm"
                      width="37px"
                    />{" "}
                  </div>
                  <div className="col" id="today-third-temp">
                    20°{" "}
                  </div>
                </div>
              </section>
              <section className="today_fourth">
                <div className="row align-items-start">
                  <div className="col" id="today-fourth-time">
                    18:00
                  </div>
                  <div className="col">
                    <img
                      id="today-fourth-img"
                      src={"/images/01d.png"}
                      alt="weather icon illustration"
                      className="image_6pm"
                      width="37px"
                    />
                  </div>
                  <div className="col" id="today-fourth-temp">
                    19°
                  </div>
                </div>
              </section>
              <section className="today_fifth">
                <div className="row align-items-start">
                  <div className="col" id="today-fifth-time">
                    21:00{" "}
                  </div>
                  <div className="col">
                    <img
                      id="today-fifth-img"
                      src={"/images/02d.png"}
                      alt="weather icon illustration"
                      className="image_9pm"
                      width="37px"
                    />
                  </div>
                  <div className="col" id="today-fifth-temp">
                    17°
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-info">
        <p>
          <a
            href="https://github.com/RebRomBell?tab=repositories"
            className="footer-info"
            rel="noreferer"
          >
            Open-source code
          </a>{" "}
          by Rebecca Bell
        </p>
      </footer>
      </div>
    );
}