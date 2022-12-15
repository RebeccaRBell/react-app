import React from "react";

export default function WeatherIcon(props) {
    console.log(props.icon);
    let imgsrc = ("./images/" + (props.icon) + ".png");
    return (
        <div><img className="weather-icon" src={imgsrc} alt="weather icon"></img></div>
    )
}