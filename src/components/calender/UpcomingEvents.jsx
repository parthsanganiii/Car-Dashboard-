import React from "react";

const UpcomingEvents = () => {
  const events = [
    { time: "09:00", title: "Drift Series Firs Round", subtitle: "JDM", color: "bg-[#A162F7]", attendees: 8 },
    { time: "10:00", title: "Drift Series Firs Round", subtitle: "JDM", color: "bg-[#70CF97]", attendees: 5 },
  ];

  return (
    <div className="bg-white dark:bg-[#242731] rounded-xl p-7 mt-8">
      <h2 className="text-[20px] font-semibold mb-4 text-[#242731] dark:text-[white]">Upcoming Events</h2>
      <div className="space-y-4">
        {/* Time slots */}
        <div className="space-y-2">
          <TimeSlot time="08:00" />
          {events.map((event, index) => (
            <EventCard
              key={index}
              time={event.time}
              title={event.title}
              subtitle={event.subtitle}
              color={event.color}
              attendees={event.attendees}
            />
          ))}
          <CurrentTimeSlot />
          <TimeSlot time="11:00" />
          <TimeSlot time="12:00" />
          <TimeSlot time="01:00" />
          <TimeSlot time="02:00" />
        </div>
      </div>
    </div>
  );
};

const TimeSlot = ({ time }) => {
  return <div className="text-[#72767C] dark:text-[#7C7C8D] text-sm">{time}</div>;
};

const CurrentTimeSlot = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-[#F65E5E] text-sm">10:15</div>
      <div className="w-full h-px bg-[#F65E5E]"></div>
    </div>
  );
};

const EventCard = ({ time, title, subtitle, color, attendees }) => {
  return (
    <div className="sm:flex items-center">
      <div className="text-[#72767C] dark:text-[#7C7C8D] text-sm w-16">{time}</div>
      <div className={`flex-grow p-3 rounded-lg flex justify-between items-center ${color}`}>
        <div>
          <div className="text-white text-sm">{title}</div>
          <div className="text-white text-xs">{subtitle}</div>
        </div>
        <div className="flex items-center space-x-1">
          {/* Avatars */}
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-white text-sm">+{attendees}</span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
