import React from 'react'

const data = [
    { id: 1, title: "Mini Cooper", img: "images/r-car-1.svg", percentage: "64% Recommend", bg: "bg-[#E1DFA4]", k: "132K", rent: "$32/h" },
    { id: 2, title: "Porsche 911 Carrera", img: "images/r-car-1.svg", percentage: "74% Recommend", bg: "bg-[#E3ECF1]", k: "130K", rent: "$28/h" },
    { id: 3, title: "Porsche 911 Carrera", img: "images/r-car-1.svg", percentage: "74% Recommend", bg: "bg-[#F4E3E5]", k: "130K", rent: "$28/h" },
]

const CarList = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-8'>
            {
                data.map((item) => (
                    <div key={item.id}
                        className={`py-4 px-6 ${item.bg} flex flex-col rounded-2xl	mt-8`}>
                        <div className='flex gap-4'>
                            <img src='images/arrow.svg' />
                            <p className='text-[#242731] font-bold'>{item.percentage}</p>
                        </div>

                        <img src={item.img} />
                        <h1 className='text-[#1F2128] font-bold text-[18px]'>{item.title}</h1>

                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <img src='images/arrow-1.svg' />
                                <p className='text-[#72767C]'>{item.k}</p>
                                <img src='images/setting-1.svg' />
                                <img src='images/icon.svg' />
                            </div>
                            <p className='text-[#72767C]'>{item.rent}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CarList