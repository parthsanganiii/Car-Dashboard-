import React, { useState } from 'react';

const DateCalender = () => {
    const [selectedDate, setSelectedDate] = useState(16);

    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const [activePeriod, setActivePeriod] = useState('Month'); // Toggle between Day, Week, Month

    return (
        <div className="p-4 mx-auto bg-white dark:bg-[#242731] rounded-xl w-full ">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[20px] font-semibold text-[#242731] dark:text-white ">March, 2022</h2>
                <div className="flex items-center">
                    <button className="text-[#808191] dark:text-[#7C7C8D] hover:text-gray-700 p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="text-[#808191] dark:text-[#7C7C8D] hover:text-gray-700 p-1 ml-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Toggle for Week/Month */}
            <div className="flex justify-center mb-6 w-full bg-[#F9F9F9] dark:bg-[#2B2E38] rounded-full">
                <button
                    onClick={() => setActivePeriod('Week')}
                    className={`${activePeriod === 'Week' ? 'bg-[#FF6370] text-white' : 'text-[#242731] dark:text-white'} py-3 rounded-full w-full`}
                >
                    Week
                </button>
                <button
                    onClick={() => setActivePeriod('Month')}
                    className={`${activePeriod === 'Month' ? 'bg-[#FF6370] text-white' : 'text-[#242731] dark:text-white'} py-3 rounded-full w-full`}
                >
                    Month
                </button>
            </div>

            {/* Days of the Week */}
            <div className="grid grid-cols-7 gap-2 mb-4 text-center text-[#C3C3C3] dark:text-[#E0E4E7] ">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2 text-center">
                {daysInMonth.map((day) => (
                    <div
                        key={day}
                        className={`sm:py-4 rounded-full cursor-pointer ${selectedDate === day ? 'bg-[#FF6370] text-white shadow-md shadow-[#FF6370]' : 'text-[#5F6165] dark:text-[#7C7C8D] '}`}
                        onClick={() => setSelectedDate(day)}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DateCalender;
