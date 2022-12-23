import React, { useState } from "react";
import axios from "axios";


export default function Forecast(props) {
let [day1, setDay1] = useState("Mon");
let [day2, setDay2] = useState("Tue");
let [day3, setDay3] = useState("Wed");
let [day4, setDay4] = useState("Thu");
let [day5, setDay5] = useState("Fri");

let [icon1, setIcon1] = useState("./images/01d.png");
let [icon2, setIcon2] = useState("./images/02d.png");
let [icon3, setIcon3] = useState("./images/03d.png");
let [icon4, setIcon4] = useState("./images/02d.png");
let [icon5, setIcon5] = useState("./images/10d.png");

let[mintemp1, setMintemp1] = useState("3");
let[mintemp2, setMintemp2] = useState("3");
let[mintemp3, setMintemp3] = useState("4");
let[mintemp4, setMintemp4] = useState("5");
let[mintemp5, setMintemp5] = useState("2");

let[maxtemp1, setMaxtemp1] = useState("7");
let[maxtemp2, setMaxtemp2] = useState("7");
let[maxtemp3, setMaxtemp3] = useState("7");
let[maxtemp4, setMaxtemp4] = useState("7");
let[maxtemp5, setMaxtemp5] = useState("7");

  function returnForecast(response) {
 console.log(response);
 let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
setDay1(days[new Date((response.data.daily[0].dt) * 1000).getDay()]);
setDay2(days[new Date((response.data.daily[1].dt) * 1000).getDay()]); 
setDay3(days[new Date((response.data.daily[2].dt) * 1000).getDay()]); 
setDay4(days[new Date((response.data.daily[3].dt) * 1000).getDay()]); 
setDay5(days[new Date((response.data.daily[4].dt) * 1000).getDay()]); 

setIcon1("./images/" + (response.data.daily[0].weather[0].icon) + ".png");
setIcon2("./images/" + (response.data.daily[1].weather[0].icon) + ".png");
setIcon3("./images/" + (response.data.daily[2].weather[0].icon) + ".png");
setIcon4("./images/" + (response.data.daily[3].weather[0].icon) + ".png");
setIcon5("./images/" + (response.data.daily[4].weather[0].icon) + ".png");

setMintemp1(Math.round(response.data.daily[0].temp.min));
setMintemp2(Math.round(response.data.daily[1].temp.min));
setMintemp3(Math.round(response.data.daily[2].temp.min));
setMintemp4(Math.round(response.data.daily[3].temp.min));
setMintemp5(Math.round(response.data.daily[4].temp.min));

setMaxtemp1(Math.round(response.data.daily[0].temp.max));
setMaxtemp2(Math.round(response.data.daily[1].temp.max));
setMaxtemp3(Math.round(response.data.daily[2].temp.max));
setMaxtemp4(Math.round(response.data.daily[3].temp.max));
setMaxtemp5(Math.round(response.data.daily[4].temp.max));





  }
    let apiKey = "a43564c91a6c605aeb564c9ed02e3858"
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(returnForecast);

 
    return(
        <div className="forecast">
        <div className="forecast-one">
                  <p>{day1}</p>
                  <img src={icon1}  alt="weather icon"></img>
                   <p><span className="max-temp">{maxtemp1}°</span><br /><span className="min-temp">{mintemp1}°</span></p>
                </div>
                  <div className="forecast-two">
                <p>{day2}</p>
                  <img src={icon2} alt="weather icon"></img>
                <p><span className="max-temp">{maxtemp2}°</span><br /><span className="min-temp">{mintemp2}°</span></p>
                </div>
                  <div className="forecast-three">
                   <p>{day3}</p>
                  <img src={icon3} alt="weather icon"></img>
                 <p><span className="max-temp">{maxtemp3}°</span><br /><span className="min-temp">{mintemp3}°</span></p>
                </div>
                  <div className="forecast-four">
                 <p>{day4}</p>
                  <img src={icon4} alt="weather icon"></img>
                  <p><span className="max-temp">{maxtemp4}°</span><br /><span className="min-temp">{mintemp4}°</span></p>
                </div>
                  <div className="forecast-five">
                 <p>{day5}</p>
                   <img src={icon5} alt="weather icon"></img>
                    <p><span className="max-temp">{maxtemp5}°</span><br /><span className="min-temp">{mintemp5}°</span></p>
                </div>
                </div>
    )

}