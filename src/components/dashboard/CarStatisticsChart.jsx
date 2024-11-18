import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
    // Data for different time periods
    const dayData = {
        labels: ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm'],
        datasets: [
            {
                label: 'Car Statistics',
                data: [30, 50, 60, 85, 70, 65, 60, 70],
                borderColor: '#FF7849',
                fill: true,
                backgroundColor: 'rgba(255, 120, 73, 0.1)', // Shadow under the line
                tension: 0.4,
            },
        ],
    };

    const weekData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Car Statistics',
                data: [300, 500, 400, 600, 550, 650, 700],
                borderColor: '#FF7849',
                fill: true,
                backgroundColor: 'rgba(255, 120, 73, 0.1)',
                tension: 0.4,
            },
        ],
    };

    const monthData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Car Statistics',
                data: [2500, 3000, 4000, 3500],
                borderColor: '#FF7849',
                fill: true,
                backgroundColor: 'rgba(255, 120, 73, 0.1)',
                tension: 0.4,
            },
        ],
    };

    const [activePeriod, setActivePeriod] = useState('Day'); // Toggle between Day, Week, Month

    // Choose dataset based on the selected period
    const data = activePeriod === 'Day' ? dayData : activePeriod === 'Week' ? weekData : monthData;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hides the legend for cleaner look
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false, // Hide Y-axis labels
                },
            },
        },
    };

    return (
        <div className="w-full h-full mx-auto sm:p-6 p-1 bg-white dark:bg-[#242731] rounded-xl cursor-pointer">
            <h2 className="text-[20px] font-bold mb-4 text-black dark:text-white">Car  <span className="font-normal">Statistics</span></h2>

            <div className='sm:flex justify-between items-center'>
                <p className="text-gray-400 mb-4 text-base ">20 February 2022</p>

                <div className='font-medium rounded-full w h-auto sm:text-[14px] text-xs'>
                    <button
                        onClick={() => setActivePeriod('Day')}
                        className={`${activePeriod === 'Day' ? 'bg-[#FF764C] text-white' : 'text-[#5F6165] dark:text-[#7C7C8D]'} py-1 px-3 rounded-full`}
                    >
                        Day
                    </button>
                    <button
                        onClick={() => setActivePeriod('Week')}
                        className={`${activePeriod === 'Week' ? 'bg-[#FF764C] text-white' : 'text-[#5F6165] dark:text-[#7C7C8D]'} py-1 px-3 rounded-full`}
                    >
                        Week
                    </button>
                    <button
                        onClick={() => setActivePeriod('Month')}
                        className={`${activePeriod === 'Month' ? 'bg-[#FF764C] text-white' : 'text-[#5F6165] dark:text-[#7C7C8D]'} py-1 px-3 rounded-full`}
                    >
                        Month
                    </button>
                </div>
            </div>

            {/* Line Chart */}
            <div className="w-full sm:h-64 h-40 sm:mt-0 mt-10">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default LineChart;
