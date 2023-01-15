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
    <div className="flex gap-5 text-white font-bold text-sm">
      <div className="h-12 w-12 bg-slate-500 rounded">
        <div className="flex justify-center items-end ">
          <span>{days}</span>
        </div>
        <div className="flex justify-center items-end h-1/2">
          <span>Days</span>
        </div>
      </div>
      <div className="h-12 w-12 bg-slate-500 rounded">
        <div className="flex justify-center items-end ">
          <span>{hours}</span>
        </div>
        <div className="flex justify-center items-end h-1/2">
          <span>Hours</span>
        </div>
      </div>
      <div className="h-12 w-12 bg-slate-500 rounded">
        <div className="flex justify-center items-end ">
          <span>{mins}</span>
        </div>
        <div className="flex justify-center items-end h-1/2">
          <span>Mins</span>
        </div>
      </div>
      <div className="h-12 w-12 bg-slate-500 rounded">
        <div className="flex justify-center items-end ">
          <span>{secs}</span>
        </div>
        <div className="flex justify-center items-end h-1/2">
          <span>Secs</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
