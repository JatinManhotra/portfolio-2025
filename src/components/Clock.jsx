import  { useEffect, useState } from "react";
import { FaRegClock, FaWindowMinimize } from "react-icons/fa";


const Clock = () => {

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [daytime, setDaytime] = useState(""); // AM / PM

  const [fullDate, setFullDate] = useState(""); // Sat, May 18, 2025

  const [is24hr, setIs24hr] = useState(false); // toggle between 24 hour mode and 12 hour mode
  const [showClock, setShowClock] = useState(false); // show and hide clock

  const formatDate = (date) => {
    const options = {
      weekday: "short", // Mon
      day: "numeric", // 31
      month: "short", // Jan
      year: "numeric", // 2003
    };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const formatTime = (num) => num.toString().padStart(2, "0"); // insert 0 in front of numbers from 0 - 9

    function showHours(hour) {
      if (hour === 0) {
        setDaytime("AM");
        return "12"; // Midnight case : 12 am
      } else if (hour === 12) {
        setDaytime("PM");
        return "12"; // Noon case : 12 pm
      } else if (hour > 12) {
        setDaytime("PM");
        return (hour - 12).toString().padStart(2, "0"); // 12:00 pm - 11:59 pm
      } else {
        setDaytime("AM");
        return hour.toString().padStart(2, "0"); // 12:00 am - 11:59 am
      }
    }

    const interval = setInterval(() => {
      const now = new Date();
      const hrs = now.getHours();

      if (is24hr) {
        setHours(hrs.toString().padStart(2, "0")); // insert 0 in front of numbers from 0 - 9
        setDaytime(""); // Hide AM/PM
      } else {
        setHours(showHours(hrs));
      }

      setFullDate(formatDate(new Date()));
      setMinutes(formatTime(now.getMinutes()));
      setSeconds(formatTime(now.getSeconds()));
    }, 1000); // updates every seconds

    return () => clearInterval(interval);
  }, [is24hr]);

  return (
    <>

    {/* clock icon to show after hiding the clock */}
      <div
        title="Show clock"
        onClick={() => setShowClock(true)}
        className={`${!showClock ? "scale-100" : "scale-0"} gold-btn card-shadow fixed right-2 bottom-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full md:right-10`}
      >
        <FaRegClock className="text-3xl" />
      </div>

      {/* clock component */}
      <div
        className={` ${showClock ? "scale-100" : "scale-0"} gold-gradient card-shadow text-main-light fixed right-2 bottom-2 flex w-65 origin-bottom-right items-center gap-4 rounded-lg px-6 py-2 sm:w-75 sm:py-3 md:right-10`}
      >

        {/* day, date and time component */}
        <div className="text-2xl sm:text-3xl">
          <div className="text-main-light text-xs sm:text-sm">{fullDate}</div>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
          <span className="text-base font-semibold sm:text-lg">{daytime}</span>
        </div>

        {/* hide clock button */}
        <FaWindowMinimize
          onClick={() => setShowClock(false)}
          className="absolute top-0 right-2 cursor-pointer p-1 text-2xl"
        />

        {/* toggle 24 hour / 12 hour button */}
        <div className="bg-dark dark:dark-bg-gradient absolute right-2 bottom-1 flex cursor-pointer items-center gap-2 self-start rounded-full px-2 text-sm text-gray-400">
          <button
            aria-label="24 hour"
            disabled={is24hr}
            className="disabled:text-gold cursor-pointer"
            onClick={() => setIs24hr(true)}
          >
            24H
          </button>
          <button
            aria-label="12 hour"
            disabled={!is24hr}
            className="disabled:text-gold cursor-pointer"
            onClick={() => setIs24hr(false)}
          >
            12H
          </button>
        </div>
      </div>
    </>
  );
};

export default Clock;
