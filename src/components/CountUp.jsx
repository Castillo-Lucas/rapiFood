import React, { useState, useEffect } from "react";

const CountUp = () => {

  const [timeUp, setTimeUp] = useState(1);

  useEffect(() => {
    const timer =
    timeUp > 0 &&
      setInterval(() => {
        setTimeUp(timeUp + 1);
      }, 1000);

    return () => clearInterval(timer);
  }, [timeUp]);

  const CntDwnMinutes = Math.floor(timeUp / 60);
  const CntDwnSeconds = (timeUp % 60).toString().padStart(2, "0");

  return (
    <div>
      <h1 className="mt-3 font-bold text-lg text-center text-neutral-100 dark:text-gray-400">{`${CntDwnMinutes}:${CntDwnSeconds}`}</h1>
    </div>
  );
};

export default CountUp;
