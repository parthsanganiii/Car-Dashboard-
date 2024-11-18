import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ActivityChart = () => {
  // Data for the line chart
  const data = {
    labels: ['12/9', '12/9', '12/9', '12/9', '12/9', '12/9', '12/9', '12/9'], // X-axis labels
    datasets: [
      {
        label: 'Activity',
        data: [20, 50, 60, 55, 60, 70, 60, 80], // Y-axis data points
        borderColor: '#A78BFA', // Line color (light purple)
        fill: true, // Fill under the line
        backgroundColor: 'rgba(167, 139, 250, 0.1)', // Purple shadow color with transparency
        pointBackgroundColor: '#ffffff', // White point on hover
        pointBorderColor: '#A78BFA', // Border color for point
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4, // Makes the line smooth
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides grid lines on X-axis
        },
        ticks: {
          font: {
            size: 12, // Custom font size for X-axis labels
            family: 'sans-serif',
          },
          color: '#A1A1AA', // Light gray color for X-axis labels
        },
      },
      y: {
        grid: {
          display: false, // Hides grid lines on Y-axis
        },
        ticks: {
          display: false, // Hides Y-axis labels
        },
      },
    },
  };

  return (
    <div className="w-full mx-auto p-6 bg-white dark:bg-[#242731] rounded-xl cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <h2 className="sm:text-[20px] font-semibold text-[#242731] dark:text-white">Activity</h2>
        <a href="#" className="sm:text-sm text-[12px] text-[#A4A5A6] dark:text-[#E0E4E7]">View All</a>
      </div>

      <div className="relative">
        <Line data={data} options={options} />

        {/* Highlighted Section */}
        {/* <div className="absolute inset-y-0 left-[30%] flex flex-col items-center justify-center">
          <div className="w-10 h-48 bg-purple-300 opacity-30 rounded-lg"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <span className="block bg-white border-2 border-purple-400 rounded-full p-1"></span>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm">Traveled last month</p>
            <p className="text-lg font-bold">50 Km</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ActivityChart;
