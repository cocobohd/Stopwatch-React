import React from "react";
import Laps from "../Laps/Laps";
import "./timer.css"

export default function Timer() {
  const [min, setMin] = React.useState(0)
  const [sec, setSec] = React.useState(0)
  const [milisec, setMilisec] = React.useState(0)
  const [laps, setLaps] = React.useState([])

  const [isStart, setIsStart] = React.useState(true)
  const [isLap, setIsLap] = React.useState(false)
  const [isStop, setIsStop] = React.useState(false)
  const [isReset, setIsReset] = React.useState(false)

  const renderLaps = laps.map((item) => {
    return <Laps 
      id = {item.id}
      key = {item.key}
      min = {item.minutesLaps}
      sec = {item.secondsLaps}
      mil = {item.milisecondsLaps}
    />
  })
  
  function startInterval() {
    let minutes = min
    let seconds = sec
    let miliseconds = milisec
    setIsStart(false)
    setIsLap(true)
    setIsStop(true)
    setIsReset(true)

    const int = setInterval(() => {
      miliseconds += 1
      if (miliseconds > 99) {
        miliseconds = 0
        seconds += 1
        setSec(seconds)

        if (seconds > 59) {
          seconds = 0
          minutes += 1
          setMin(minutes)
        }

      }
      setMilisec(miliseconds)
    }, 10);

   const stopBtn = document.getElementById("stop")
   const lapBtn = document.getElementById("lap")
   const resetBtn = document.getElementById("reset")

   stopBtn.addEventListener("click", () =>  {
     clearInterval(int)
     setIsStart(true)
     setIsLap(false)
    })
   lapBtn.addEventListener("click", () => {
     let newObj = {
       id: laps.length + 1,
       key: Math.floor(Math.random()*2000),
       minutesLaps: minutes,
       secondsLaps: seconds,
       milisecondsLaps: miliseconds
     }
     
     laps.push(newObj)
   })
   resetBtn.addEventListener("click", () => {
    clearInterval(int)
    setMin(0)
    setSec(0)
    setMilisec(0)
    setLaps([])
    setIsStart(true)
    setIsLap(false)
    setIsStop(false)
    setIsReset(false)
   })
  }

  return (
    <div className="timer"> 
      <div className="stopwatch">
        <p className="stopwatch--current">
          {min <= 9 ? "0" : ""}{min} : {sec <= 9 ? "0" : ""}{sec} : {milisec <= 9 ? "0" : ""}{milisec}
        </p> 
      </div>
      
      <div className="btns">
        <button id="start" className={isStart ? "start active" : "start"} onClick={() => startInterval()} >
          Start
        </button>
        <button id="lap" className={isLap ? "lap active" : "lap"}>
          Lap
        </button>
        <button id="stop" className={isStop ? "stop active" : "stop"}>
          Stop
        </button>
        <button id="reset" className={isReset ? "reset active" : "reset"}>
          Reset
        </button>
      </div>

      <>
        {renderLaps}
      </>
    </div>
  )
}