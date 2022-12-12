import React, { useState} from "react";
import axios from "axios";
import "./App.css";

export default function CurrentTime(){
    function getData(response) {
        console.log(response);

    const city = "london";
    const apiKey = "0t2105f1dc833abd4d72b4f0503d9bao";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);
   
      let day = time.getDay();
      console.log(day);
        let hours = time.getHours();
        console.log(hours);
        let minutes = time.getMinutes();
        console.log(minutes);
    }
    return (
        <h3 className="current_time" id="current-time">
              Last Updated: {day} {hours}:{minutes}
              <br />
            </h3>
    )
}