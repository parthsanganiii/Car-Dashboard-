// import React from "react";

// const EventScheduler = () => {
//   const events = [
//     { time: "08:00 AM", title: "Moto Track Day", subtitle: "All Motorbikes", color: "bg-purple-500", attendees: "154K", duration: "2h" },
//     { time: "09:45 AM", title: "Drift Swries Second Round", subtitle: "JDM", color: "bg-purple-400", attendees: "1h 45 min", duration: "1h 45m" },
//     { time: "10:00 AM", title: "Moto Track Day", subtitle: "All Motorbikes", color: "bg-blue-500", attendees: "154K", duration: "45m" },
//     { time: "10:45 AM", title: "Moto Track Day", subtitle: "All Motorbikes", color: "bg-gray-800", attendees: "58K", duration: "15m" },
//     { time: "01:00 PM", title: "Moto Track Day", subtitle: "All Motorbikes", color: "bg-green-500", attendees: "145K", duration: "1h" },
//     { time: "02:00 PM", title: "Private Event", subtitle: "All Motorbikes", color: "bg-orange-400", attendees: "134K", duration: "1h" },
//     { time: "10:45 AM", title: "Drift Series Second Round", subtitle: "JDM", color: "bg-gray-800", attendees: "58K", duration: "15m" },
//   ];

//   return (
//     <div className="bg-white dark:bg-[#242731] text-white rounded-xl">
//       <div className="">
//         {/* Header */}
//         <div className="flex justify-between items-center bg-blue-700 p-4 rounded-t-xl mb-6">
//           <button className="text-white">Day</button>
//           <div className="flex items-center space-x-4">
//             <span className="text-white">Mar 15, 2022</span>
//             <div className="flex space-x-2">
//               <button className="text-white">&lt;</button>
//               <button className="text-white">&gt;</button>
//             </div>
//           </div>
//         </div>

//         {/* Time Slots and Events */}
//         <div className="relative p-4">
//           {/* <TimeSlot time="08:00 AM" /> */}
//           <EventCard time="08:00 AM" {...events[0]} />

//           {/* <TimeSlot time="09:00 AM" /> */}
//           <EventCard time="09:00 AM" {...events[1]} />

//           {/* <TimeSlot time="10:00 AM" /> */}
//           <EventCard time="10:00 AM" {...events[2]} />
//           <EventCard time="11:00 AM" {...events[3]} />

//           {/* <TimeSlot time="11:00 AM" /> */}

//           {/* <TimeSlot time="01:00 PM" /> */}
//           <EventCard time="01:00 PM" {...events[4]} />

//           {/* <TimeSlot time="02:00 PM" /> */}
//           <EventCard time="02:00 PM" {...events[5]} />

//           {/* <TimeSlot time="03:00 PM" /> */}
//           <EventCard time="10:45 AM" {...events[6]} />

//           {/* <TimeSlot time="04:00 PM" /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const TimeSlot = ({ time }) => {
//   return <div className="text-gray-500 text-sm mb-2">{time}</div>;
// };

// const EventCard = ({ time, title, subtitle, color, attendees, duration }) => {
//   return (
//     <div className="flex items-start mb-4">
//       <div className="w-24 text-gray-400 text-sm">{time}</div>
//       <div className={`flex-grow p-3 rounded-lg ${color}`}>
//         <div className="flex justify-between">
//           <div>
//             <div className="font-semibold">{title}</div>
//             <div className="text-sm text-gray-300">{subtitle}</div>
//           </div>
//           <div className="text-sm">
//             <div>{duration}</div>
//             <div>{attendees}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventScheduler;


import React from 'react'

const events = [
    { time: "08:00 AM", title: "Moto Track Day", subtitle: "All Motorbikes", color: "bg-[#A162F7] shadow-[#A162F7] shadow-md", attendees: "154K" },
    { time: "09:00 AM", title: "Drift Swries Second Round", subtitle: "JDM", color: "bg-[#725CFF] shadow-[#725CFF] shadow-md", attendees: "1h 45 min" },
    { time: "10:00 AM", title: "Moto Track Day", subtitle: "All Motorbikes", color: "bg-[#2884FF] shadow-[#2884FF] shadow-md", attendees: "154K" },
    // { time: "11:00 AM", title: "Moto Track Day", subtitle: "All Motorbikes", color: "bg-[#C4C4C4] shadow-[#E0E4EC] shadow-md", attendees: "58K" },
    { time: "12:00 PM", title: "Moto Track Day", subtitle: "All Motorbikes", color: "bg-[#70CF97] shadow-[#70CF97] shadow-md", attendees: "145K" },
    { time: "01:00 PM", title: "Private Event", subtitle: "All Motorbikes", color: "bg-[#FF764C] shadow-[#FF764C] shadow-md", attendees: "134K" },
    { time: "02:45 AM", title: "Drift Series Second Round", subtitle: "JDM", color: "bg-[#343847] shadow-[#343847] shadow-md", attendees: "58K" },
    // { time: "03:45 AM", title: "Drift Series Second Round", subtitle: "JDM", color: "bg-gray-800 shadow-[#A062F733] shadow-md", attendees: "58K" },
    // { time: "04:45 AM", title: "Drift Series Second Round", subtitle: "JDM", color: "bg-gray-800 shadow-[#A062F733] shadow-md", attendees: "58K" },
];


const EventScheduler = () => {
    return (
        <div className='bg-white dark:bg-[#242731] rounded-xl '>
            <div className='sm:flex  grid grid-cols-1 gap-4 justify-between items-center bg-[#2884FF] rounded-t-xl py-4 sm:px-7 px-16'>
                <h2 className='bg-[#549CFD] text-white flex justify-between items-center px-3 py-2 rounded-xl gap-3'>Day <span className='cursor-pointer'><img src='images/down-arrow-w.svg' /> </span></h2>
                <h2 className='bg-[#549CFD] text-white flex justify-between items-center px-3 py-2 rounded-xl gap-3'> <span className='cursor-pointer'><img src='images/calender-w.svg' /> </span>Mar 15, 2022 </h2>
                <div className="flex space-x-2 justify-between items-center px-3 py-2 rounded-xl gap-3 bg-[#549CFD]">
                    <button className="text-white p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 p-6'>
                {events.map((event) => (
                    <div className={`sm:flex`}>
                        <h2 className='font-medium sm:text-[14px] text-[12px] '>{event.time}</h2>
                        <div className={`flex justify-between w-full rounded-xl sm:mt-0 mt-2 ${event.color} p-4 `}>
                            <div className=''>
                                <h2 className='font-medium text-white sm:text-[14px] text-[12px] '>{event.time}</h2>
                                <h1 className='font-medium text-white sm:text-[18px] text-[14px]'>{event.title}</h1>
                                <h2 className='font-medium text-white sm:text-[14px] text-[12px]'>{event.subtitle} </h2>
                            </div>
                            <h2 className='text-white'>{event.attendees} </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventScheduler