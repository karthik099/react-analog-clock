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

  console.log(hours, "-", minutes, "-", seconds);

  // + 90 deg is to correct the angle
  const secondDeg = seconds * 6 + 90;
  const minuteDeg = minutes * 6 + seconds * 0.1 + 90;
  const hourDeg = ((hours % 12) + minutes / 60) * 30 + 90;

  const digits = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="clock">
        {digits.map((digit, i) => {
          const angle = ((i + 3) * 30) + 210; // Each hour is 30 degrees apart, + 210deg to position the digits
          return (
            <div
              key={digit}
              className="number"
              style={{
                transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`,
              }}
            >
              {digit}
            </div>
          );
        })}
      <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }}>
        &nbsp;
      </div>
      <div
        className="hand minute"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      >
        &nbsp;
      </div>
      <div
        className="hand second"
        style={{ transform: `rotate(${secondDeg}deg)` }}
      >
        &nbsp;
      </div>
      <div className="center-dot">&nbsp;</div>
    </div>
  );
};
export default AnalogClock;
