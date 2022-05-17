import React from "react";

export default function Timer() {
  const [min, setMin] = React.useState(0)
  const [sec, setSec] = React.useState(0)
  const [milisec, setMilisec] = React.useState(0)

  function start() {
    let minutes = 0
    let seconds = 0
    let miliseconds = 0

    setInterval(() => {
      miliseconds += 1
      if (miliseconds > 99) {
        miliseconds = 0
        seconds += 1
        setSec(seconds)

        if (seconds >= 60) {
          seconds = 0
          minutes += 1
          setMin(minutes)
        }

      }
      setMilisec(miliseconds)
    }, 10);
  }

  function stop() {
    
  }

  function reset() {
    setMin(0)
    setSec(0)
    setMilisec(0)
  }

  return (
    <div className="timer"> 
      {min <= 9 ? "0" : ""}{min} : {sec <= 9 ? "0" : ""}{sec} : {milisec <= 9 ? "0" : ""}{milisec}
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}