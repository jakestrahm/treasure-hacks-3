import { now } from "mongoose";
import { useState, useEffect } from "react";
const Countdown = ({ date }) => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [secs, setSecs] = useState();
  let sampleDate = new Date("Jan 15, 2024 15:37:25").getTime();
  useEffect(() => {
    const timeID = setInterval(() => {
      let now = new Date().getTime();
      let distance = sampleDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMins(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSecs(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(timeID);
  }, []);

  return (
    <div>
      {days} days, {hours} hours , {mins} mins , {secs} secs
    </div>
  );
};

export default Countdown;
