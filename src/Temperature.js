import React, { useState } from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celcius");

    function changeToF(event) {
        event.preventDefault();
        setUnit("fahrenheit");

    }
 
    function changeToC(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    if (unit === "celcius") {
    return (
        <div>
        <div
              className="btn-group btn-group-toggle buttons"
              data-toggle="buttons"
            >
              <label className="btn btn-secondary" id="temp-button1" onClick={changeToC}>
                <input type="radio" name="options" id="option1"  onClick={changeToC}/> °C
              </label>
              <label className="btn btn-secondary" id="temp-button2" onClick={changeToF}>
                <input type="radio" name="options" id="option2" onClick={changeToF} /> °F
              </label>
            </div>
            <div className="temp-today">
              <p>{props.temp}°</p>
            </div>
            </div>
    );
    } else {
        let fahrenheit = Math.round((props.temp * 9 / 5) + 32);
    return (
        <div>
      <div
              className="btn-group btn-group-toggle buttons"
              data-toggle="buttons"
            >
              <label className="btn btn-secondary" id="temp-button1" onClick={changeToC}>
                <input type="radio" name="options" id="option1"  onClick=
                {changeToC}/> °C
              </label>
              <label className="btn btn-secondary" id="temp-button2" onClick={changeToF}>
                <input type="radio" name="options" id="option2" onClick={changeToF} /> °F
              </label>
            </div>
            <div className="temp-today">
              <p>{fahrenheit}°</p>
            </div>
            </div>
    );
}
}