import React from "react";
import "./laps.css"

export default function Laps(props) {
  return (
    <div className="laps">
      <p className="laps--item">{props.min} min : {props.sec} sec : {props.mil} mil</p>
    </div>
  )
}