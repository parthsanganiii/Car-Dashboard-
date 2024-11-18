import React from 'react'
import { motion } from 'framer-motion';

const data = [
  { id: 1, title: "Urgent Safety Recall", fdate: "06/04/2022", ldate: "08/04/2022", notify: "David Demo", status: "Completed" },
  { id: 2, title: "Urgent Safety Recall", fdate: "06/04/2022", ldate: "08/04/2022", notify: "David Demo", status: "Completed" }
]

const Reminder = () => {
  return (
    <div className='bg-white dark:bg-[#242731] rounded-xl p-6 mt-8'>
      <div className='flex justify-between items-center mb-3'>
      <h1 className='text-[#242731] dark:text-white font-bold sm:text-[20px]'>Reminder</h1>

        <button className='bg-[#A162F7] text-white sm:text-[16px] text-[12px] w-auto py-2 px-4 font-medium rounded-xl'>
          + Add New
        </button>
      </div>
      <div className='overflow-x-auto'>
        <div className='bg-[#F3F3F3] h-[1px] mt-5'></div>
        <table className='min-w-full divide-y divide-[#F3F3F3]'>
          <thead>
            <tr>
              <th className='sm:text-[16px] text-[14px] py-3 text-left text-lg font-semibold text-[#72767C] dark:text-[#7C7C8D] tracking-wider'>
                Description
              </th>
              <th className='sm:text-[16px] text-[14px] py-3 text-left font-semibold text-[#72767C] dark:text-[#7C7C8D] tracking-wider'>
                Due
              </th>
              <th className='sm:text-[16px] text-[14px] py-3 text-left font-semibold text-[#72767C] dark:text-[#7C7C8D] tracking-wider'>
                Overdue
              </th>
              <th className='sm:text-[16px] text-[14px] py-3 text-left font-semibold text-[#72767C] dark:text-[#7C7C8D] tracking-wider'>
                Notify
              </th>
              <th className='sm:text-[16px] text-[14px] py-3 text-left font-semibold text-[#72767C] dark:text-[#7C7C8D] tracking-wider'>
                Status
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-[#F3F3F3] space-x-2'>
            {data.map((items) => (
              <motion.tr
                key={items.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className=' py-4 sm:text-[16px] text-[14px] whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7] flex gap-2 items-center'>

                  {items.title}
                </td>

                <td className=' py-4 sm:text-[16px] text-[14px] whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7]'>
                  {items.fdate}
                </td>

                <td className=' py-4 sm:text-[16px] text-[14px] whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7]'>
                  ${items.ldate}
                </td>
                <td className=' py-4 sm:text-[16px] text-[14px] whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7]'>{items.notify}</td>
                <td className=' py-4 sm:text-[16px] text-[14px] whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7]'>{items.status}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Reminder