import React, { useState } from 'react';

const data = [
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
];

const listdata = [
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
];

const Car_detail = () => {
  const [isListView, setIsListView] = useState(false);

  // Toggle view function
  const toggleView = () => {
    setIsListView(!isListView);
  };

  return (
    <div>
      <div className='flex justify-between mb-8 items-center'>
        <div className='flex gap-5'>
          <select className='bg-white dark:bg-[#242731] text-[#5F6165] dark:text-[#E0E4E7] font-medium rounded-full px-5 h-9 focus:outline-none'>
            <option>New</option>
            <option>Old</option>
          </select>
          <select className='bg-white dark:bg-[#242731] text-[#5F6165] dark:text-[#E0E4E7] font-medium rounded-full px-5 h-9 focus:outline-none'>
            <option>Toyota</option>
            <option>BMW</option>
            <option>Audi</option>
            <option>Ferrari</option>
          </select>
        </div>
        <div className='flex gap-5'>
          {/* <img 
            src='images/dashboard-icon.svg' 
            className='bg-white dark:bg-[#2B2E38] shadow-md p-3.5 rounded-full cursor-pointer' 
            onClick={toggleView} // Toggle view on click
          /> */}
          {!isListView ? (
            <img
              src='images/bars.svg'
              className='bg-white dark:bg-[#2B2E38] shadow-md p-3 rounded-full cursor-pointer'
              onClick={toggleView} // Toggle view on click
            />
          ) : (
            <img
              src='images/dashboard-icon.svg'
              className='bg-white dark:bg-[#2B2E38] shadow-md p-3.5 rounded-full cursor-pointer'
              onClick={toggleView} // Toggle view on click
            />
          )}
          {/* <img src='images/filter.svg' className='cursor-pointer' /> */}
        </div>
      </div>

      {/* Conditionally render the view based on isListView */}
      {!isListView ? (
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer'}>
        {data.map((item, index) => (
          <div key={index} className={`bg-white dark:bg-[#242731] rounded-xl p-6 flex flex-col gap-6`}>
            <div className={`flex justify-between items-center`}>
                <h1 className='text-[18px] font-bold text-[#242731] dark:text-white'>{item.title}</h1>
                <img src='images/like.svg' className='cursor-pointer' />
              </div>
            <img src={item.img} className={` 'py-5'}`} />
            <div className='flex-1'>
              
              <p className='text-[16px] text-[#72767C]'>{item.type}</p>
              <div className='flex justify-between'>
                <div className='flex gap-4 items-center justify-center'>
                  <img src='images/user.svg' />
                  <p className='text-[#72767C] dark:text-[#E0E4E7]'>{item.user}</p>
                  <img src='images/b-arrow.svg' />
                  <p className='text-[#72767C] dark:text-[#E0E4E7]'>{item.gair}</p>
                </div>
                <h4 className='text-[#72767C] dark:text-[#E0E4E7]'>{item.rent}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>) : (
        <div className='grid grid-cols-1 gap-8'>
          {
            listdata.map((item, index) => (
              <div class="grid md:grid-cols-5 bg-white dark:bg-[#242731] rounded-xl p-6 overflow-hidden  w-full">
                <div class="md:col-span-2">
                  <img loading="lazy" src={item.img}
                    class="w-full h-full" />
                </div>

                <div class="md:col-span-3 sm:mx-4 mx-2 sm:my-0 my-4">
                  <div class="mt-3">
                    <p class="text-[18px] font-bold text-[#242731] dark:text-white">{item.title}</p>
                  </div>

                  <div class="flex justify-between items-center mt-3">
                    <div class="flex items-center">
                      {/* <img loading="lazy" src="{{ url('assets/images/document.svg') }}" class="shrink-0 w-5 h-5" /> */}
                      <p class="ml-2 text-sm font-normal">Documents type:</p>
                    </div>
                    <p class="text-sm font-semibold">Clean</p>
                  </div>

                  <div class="flex justify-between items-center my-2">
                    <div class="flex items-center">
                      {/* <img loading="lazy" src="{{ url('assets/images/make.svg') }}" class="shrink-0 w-5 h-5" /> */}
                      <p class="ml-2 text-sm font-normal">Make:</p>
                    </div>
                    <p class="text-sm font-semibold">Porsche</p>
                  </div>

                  <div class="flex justify-between items-center mb-3">
                    <div class="flex items-center">
                      {/* <img loading="lazy" src="{{ url('assets/images/model.svg') }}" class="shrink-0 w-5 h-5" /> */}
                      <p class="ml-2 text-sm font-normal">Model:</p>
                    </div>
                    <p class="text-sm font-semibold">Panamera</p>
                  </div>

                  <hr class="border-gray-300" />

                  <div class="flex justify-between mt-3">
                    <div class="flex items-center">
                      {/* <img loading="lazy" src="{{ url('assets/images/sale.svg') }}" class="shrink-0 w-5 h-5" /> */}
                      <p class="ml-2 text-sm font-normal">Sale type:</p>
                    </div>
                    <p class="text-sm font-semibold">On Approval</p>
                  </div>

                  <div class="flex justify-between mt-2">
                    <div class="flex items-center">
                      {/* <img loading="lazy" src="{{ url('assets/images/damage.svg') }}" class="shrink-0 w-5 h-5" /> */}
                      <p class="ml-2 text-sm font-normal">Primary damage:</p>
                    </div>
                    <p class="text-sm font-semibold">Mechanical</p>
                  </div>

                  <div class="grid gap-3 sm:grid-cols-2 mt-4 ">
                    <div class="bg-[#F5F5F5] dark:bg-[#1F2128]  flex justify-center items-center rounded-[15px] py-3 cursor-pointer">
                      <p class="lg:text-[20px] text-md font-semibold text-[#242731] dark:text-white">Vehicle On rent </p>
                    </div>
                    <div class="bg-[#A162F7] flex flex-col justify-center items-center rounded-[15px] py-3 cursor-pointer">
                      <div clas>
                        {/* <p class="lg:text-sm text-xs font-medium  text-white opacity-50">Final price:</p> */}
                        <p class="lg:text-[20px] text-md font-bold text-white">$400/D</p>
                      </div>
                    </div>
                  </div>
                  {/* <button
                    class="mb-5 w-full bg-black px-4 mt-4 py-1.5 pt-2 flex items-center justify-center rounded-full text-[16px] text-white font-medium hover:bg-gray-800"><svg
                      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M16 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M7 13H15" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M7 17H12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
                        stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg> &nbsp;
                    View details</button> */}
                </div>
              </div>
            ))
          }
        </div>
      )
      }
    </div >
  );
};

export default Car_detail;
