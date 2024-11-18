import React from 'react'

const data = [
    { img: "images/notice-1.svg", d_img: "images/d-notice-1.svg", title: "Monday, 6th Apirl 2020", desc: "Book for General Service", btn: "COMPLETED", btn_bg: "bg-[#70CF97]" },
    { img: "images/notice-2.svg", d_img: "images/notice-2.svg", title: "Thursday, 24th October 2021", desc: "Vehicle LV 001 has been marked for recall.", btn: "14:07-21/11/2021", btn_bg: "bg-[#2B2E38]" },
    { img: "images/notice-3.svg", d_img: "images/d-notice-3.svg", title: "Monday, 13th August 2018", desc: "Maintenance Completed, Collect", btn: "14:07-21/11/2021", btn_bg: "bg-[#2B2E38]" },
]

const Noties = () => {
    return (
        <div className='bg-white dark:bg-[#242731] rounded-xl sm:p-6 p-2'>
            <h1 className='text-[#242731] dark:text-white font-bold sm:text-[20px] mb-5'>Noties</h1>
            {data.map((item) => (
                <div className='flex gap-4 py-2 items-start'>
                    <img src={item.d_img} className='bg-white dark:bg-[#2B2E38] shadow-md hidden dark:flex p-4 rounded-full' />
                    <img src={item.img} className='bg-white dark:bg-[#2B2E38] shadow-md dark:hidden p-4 rounded-full' />
                    <div className='mb-2'>
                        <h1 className='text-[#000000] dark:text-white font-medium sm:text-[16px] text-[14px]'>{item.title}</h1>
                        <p className='text-[#72767C] dark:text-[#7C7C8D] sm:text-[16px] text-[14px]'>{item.desc}</p>
                        <button className={`${item.btn_bg} sm:text-[16px] text-[14px] font-medium text-white mt-2 py-1 px-3 rounded-md`}>{item.btn}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Noties