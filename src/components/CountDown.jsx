import React, { useState, useEffect } from "react";

const CountDown = ({ setEditTime }) => {

  const [time, setTime] = useState(60); 

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime(time - 1);
      }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const CntDwnMinutes = Math.floor(time / 60);
  const CntDwnSeconds = (time % 60).toString().padStart(2, "0");

  useEffect(() => {
    setEditTime(time)
  }, [time]);

  return (
    <div>
        <h1 className="mt-3 font-bold text-lg text-center text-neutral-100 dark:text-gray-400">{`${CntDwnMinutes}:${CntDwnSeconds}`}</h1>
    </div>
  );
};

export default CountDown;
