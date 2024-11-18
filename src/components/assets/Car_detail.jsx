import React from 'react'

const car_detail = [
  { title: "Fuel Usage", desc: "2903.89 Ltr" },
  { title: "KM Driven", desc: "2903.89 Ltr" },
  { title: "Total Cost", desc: "$3,00,290.00" },
  { title: "Top Speed", desc: "$5.2K" },
]

const Car_detail = () => {
  return (
    <div className='bg-[#438FFE] dark:bg-[#242731] rounded-xl lg:h-[105vh] flex flex-col mx-auto w-[100%]'>
      <div className='grid grid-cols-2 px-6 pt-8 gap-8'>
        {car_detail.map(deatils => (
          <div>
            <h4 className='text-[14px] font-medium text-[#C6DCFC]'>{deatils.title}</h4>
            <p className='text-[18px] font-bold text-[white]'>{deatils.desc}</p>
          </div>
        ))}
      </div>
      <img src='images/a-car.png' className='mt-16' />
    </div>
  )
}

export default Car_detail