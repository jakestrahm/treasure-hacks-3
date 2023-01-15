import { now } from "mongoose";
import { useState } from "react";
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
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
    return () => clearInterval(timeID);
  }, [props.timeMS]);

  return (
    <div>
      {now}, {days}, {hours}
    </div>
  );
};

export default Countdown;
