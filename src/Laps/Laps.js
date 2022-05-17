import React from "react";
import "./laps.css"

export default function Laps(props) {
  return (
    <div className="laps">
      <p>
        {props.id}. Lap
      </p>
      <p className="laps--item">
        {props.min <= 9 ? "0" : ""}{props.min} : {props.sec <= 9 ? "0" : ""}{props.sec} : {props.mil <= 9 ? "0" : ""}{props.mil}
      </p>
    </div>
  )
}