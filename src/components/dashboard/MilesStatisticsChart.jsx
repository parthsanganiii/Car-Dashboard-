import React, { useState, useEffect } from "react";
import { ResponsiveContainer } from "recharts"; // Assuming you're using recharts for the chart

const MilesStatisticsChart = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activePeriod, setActivePeriod] = useState('Day'); // Toggle between Day, Week, Month

  // On component mount, load the session (or cookie) value for activePeriod
  useEffect(() => {
    const savedPeriod = sessionStorage.getItem('activePeriod');
    if (savedPeriod) {
      setActivePeriod(savedPeriod);
    }
  }, []);

  // Save activePeriod to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('activePeriod', activePeriod);
  }, [activePeriod]);

  // Define data for different periods
  const dayData = [
    { time: "1 PM", value: 500 },
    { time: "2 PM", value: 600 },
    { time: "3 PM", value: 400 },
    { time: "4 PM", value: 100 },
    { time: "5 PM", value: 380 },
    { time: "6 PM", value: 580 },
    { time: "7 PM", value: 140 },
  ];

  const weekData = [
    { time: "Mon", value: 1000 },
    { time: "Tue", value: 700 },
    { time: "Wed", value: 400 },
    { time: "Thu", value: 500 },
    { time: "Fri", value: 600 },
    { time: "Sat", value: 750 },
    { time: "Sun", value: 800 },
  ];

  const monthData = [
    { time: "Week 1", value: 2000 },
    { time: "Week 2", value: 1500 },
    { time: "Week 3", value: 2000 },
    { time: "Week 4", value: 1700 },
  ];

  // Dynamically choose the data based on the selected period
  const data = activePeriod === 'Day' ? dayData : activePeriod === 'Week' ? weekData : monthData;

  return (
    <div className="w-full h-full mx-auto sm:p-6 p-1 bg-white dark:bg-[#242731] rounded-xl cursor-pointer">
      <h2 className="text-[20px] font-bold mb-4 text-black dark:text-white">
        Miles <span className="font-normal">Statistics</span>
      </h2>

      {/* Time Interval buttons */}
      <div className="flex space-x-4 mb-4 justify-between items-center font-medium sm:text-[14px] text-xs">
        <div>
          <button
            onClick={() => setActivePeriod('Day')}
            className={`${activePeriod === 'Day' ? 'bg-[#2884FF] text-white ' : 'text-[#5F6165]'} py-1 px-3 rounded-full`}
          >
            Day
          </button>
          <button
            onClick={() => setActivePeriod('Week')}
            className={`${activePeriod === 'Week' ? 'bg-[#2884FF] text-white' : 'text-[#5F6165]'} py-1 px-3 rounded-full`}
          >
            Week
          </button>
          <button
            onClick={() => setActivePeriod('Month')}
            className={`${activePeriod === 'Month' ? 'bg-[#2884FF] text-white' : 'text-[#5F6165]'} py-1 px-3 rounded-full`}
          >
            Month
          </button>
        </div>
        <p className="text-base font-bold text-[#5F6165]">256 Miles</p>
      </div>

      {/* Bar Chart */}
      <div className="relative flex items-end justify-between h-60">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Tooltip */}
            {hoverIndex === index && (
              <div className="mb-1 bg-black text-white sm:text-xs text-[10px] px-1 py-1 rounded-md">
                {item.time} <br /> {item.value}k
              </div>
            )}
            {/* Bar */}
            <div
              className={`sm:w-10 w-7 transition-all duration-100 ease-in-out ${
                hoverIndex === index ? "bg-[#2884FF] h-full" : "bg-[#F4F5F9] dark:bg-[#1F2128] h-full"
              }`}
              style={{ height: `${item.value / 10}px` }} // Adjusted the height calculation
            ></div>
            {/* Time Label */}
            <span className="mt-2 text-sm text-[#808191] dark:text-[#7C7C8D]">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilesStatisticsChart;
