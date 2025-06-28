import React, { useEffect, useState } from "react";
import { FaRegClock, FaWindowMinimize } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const Clock = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [daytime, setDaytime] = useState("");

  const [fullDate, setFullDate] = useState("");

  const [is24hr, setIs24hr] = useState(false);
  const [showClock, setShowClock] = useState(false);

  const formatDate = (date) => {
  const options = { weekday: "short", day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

  useEffect(() => {
    const formatTime = (num) => num.toString().padStart(2, "0");

    function showHours(hour) {
      if (hour === 0) {
        setDaytime("AM");
        return "12"; // Midnight case
      } else if (hour === 12) {
        setDaytime("PM");
        return "12"; // Noon case
      } else if (hour > 12) {
        setDaytime("PM");
        return (hour - 12).toString().padStart(2, "0");
      } else {
        setDaytime("AM");
        return hour.toString().padStart(2, "0");
      }
    }

    const interval = setInterval(() => {
      const now = new Date();
      const hrs = now.getHours();

      if (is24hr) {
        setHours(hrs.toString().padStart(2, "0"));
        setDaytime(""); // Hide AM/PM
      } else {
        setHours(showHours(hrs));
      }

      setFullDate(formatDate(new Date()));
      setMinutes(formatTime(now.getMinutes()));
      setSeconds(formatTime(now.getSeconds()));
    }, 1000);

    return () => clearInterval(interval);
  }, [is24hr]);

  return (
    <>
      <div
      title="Show clock"
        onClick={() => setShowClock(true)}
        className={`${!showClock ? "scale-100" : "scale-0"} gold-btn fixed right-2 md:right-10 bottom-2 flex h-12 w-12 cursor-pointer card-shadow items-center justify-center rounded-full`}
      >
        <FaRegClock className="text-3xl" />
      </div>

      <div
        className={` ${showClock ? "scale-100" : "scale-0"} gold-gradient card-shadow text-main-light fixed right-2 md:right-10 bottom-2 flex w-65 sm:w-75 origin-bottom-right items-center gap-4 rounded-lg px-6 py-2 sm:py-3`}
      >
        <div className="text-2xl sm:text-3xl">
          <div className="text-xs sm:text-sm text-main-light">{fullDate}</div>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
          <span className="text-base sm:text-lg font-semibold">{daytime}</span>
        </div>

        <FaWindowMinimize
          onClick={() => setShowClock(false)}
          className="absolute top-0 right-2 cursor-pointer p-1 text-2xl"
        />

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
