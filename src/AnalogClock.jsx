import React, { useEffect, useState } from "react";
import "./AnalogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

console.log(hours,"-",minutes,"-",seconds)

  const hourDeg = (hours % 12) * 30 +  minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6; // 360 / 60

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} >&nbsp;</div>
      <div className="hand minute"style={{ transform: `rotate(${minuteDeg}deg)` }}>&nbsp;</div>
      <div className="hand second"style={{ transform: `rotate(${secondDeg}deg)` }}>&nbsp;</div>
      <div className="center-dot">&nbsp;</div>
    </div>
  );
};
export default AnalogClock;
