import React from "react";

export default function CurrentTime(props) {
    console.log(props.date);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    let date = props.date.getDate();
    let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    return (
        <div>{hour}:{minutes}, {day}, {date}/{month}/{year}</div>
    )
}