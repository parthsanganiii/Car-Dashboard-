// src/components/Dashboard.js
import React from 'react';

const Detail = ({ togglevalue }) => {
	const data = [
		{ id: 1, title: "Energy", percentage: 45, progressColor: "text-[#A162F7]", progressColor_h: "group-hover:text-[#B37EFC]", hover: "hover:bg-[#A162F7] hover:dark:bg-[#A162F7]", icon: "images/filled.svg", icon_bg: "bg-purple-100", icon_color: "text-[#A162F7]" },
		{ id: 2, title: "Range", percentage: 67, progressColor: "text-[#FF7E86]", progressColor_h: "group-hover:text-[#ffa4a4]", hover: "hover:bg-[#FF7E86] hover:dark:bg-[#FF7E86]", icon: "images/range.svg", icon_bg: "bg-red-100", },
		{ id: 3, title: "Break Fluid", percentage: 9, progressColor: "text-[#A162F7]", progressColor_h: "group-hover:text-[#B37EFC]", hover: "hover:bg-[#A162F7] hover:dark:bg-[#A162F7]", icon: "images/blood.svg", icon_bg: "bg-purple-100", },
		{ id: 4, title: "Tire Wear", percentage: 25, progressColor: "text-[#F6CC0D]", progressColor_h: "group-hover:text-[#fff588]", hover: "hover:bg-[#F6CC0D] hover:dark:bg-[#F6CC0D]", icon: "images/tier.svg", icon_bg: "bg-yellow-100", },
	];


	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
			{data.map((item) => (
				//         <div
				//             key={item.id}
				//             className={`w-full h-full flex flex-col gap-5 items-center justify-center ${item.color} bg-opacity-1 rounded-lg p-4 ${item.hover} hover:text-white`}
				//         >
				//             <img src={item.icon} className={`${item.icon_bg} p-2 rounded-full ${item.icon_color}`}/>
				//             <p className=" text-center text-[24px] font-bold">{item.title}</p>

				//             <div className="relative w-[100px] h-[130px]">
				//                 <svg className="w-full h-full transform rotate-180" viewBox="0 0 36 36">
				//                     <path
				//                         className="text-[#1F2128]"
				//                         d="M18 2.0845
				// a 15.9155 15.9155 0 0 1 0 31.831
				// a 15.9155 15.9155 0 0 1 0 -31.831"
				//                         fill="none"
				//                         stroke="currentColor"
				//                         strokeWidth="4"
				//                         strokeDasharray="100, 100"
				//                     />
				//                     <path
				//                         className={item.progressColor}
				//                         d="M18 2.0845
				// a 15.9155 15.9155 0 0 1 0 31.831
				// a 15.9155 15.9155 0 0 1 0 -31.831"
				//                         fill="none"
				//                         stroke="currentColor"
				//                         strokeWidth="4"
				//                         strokeDasharray={`${item.percentage}, 100`}
				//                         strokeLinecap="round"
				//                     />
				//                 </svg>
				//                 <span className="absolute inset-0 flex items-center justify-center font-bold text-xl">
				//                     {item.percentage}%
				//                 </span>
				//             </div>

				//         </div>

				<div
					key={item.id}
					className={`w-full h-full flex flex-col gap-5 items-center justify-center 
                            
                            bg-white  dark:bg-[#242731]
                            bg-opacity-1 rounded-xl py-8 ${item.hover} text-[#242731] dark:text-[#808191]
                            hover:text-white dark:hover:text-white group cursor-pointer`} // Corrected the className
				>
					<img src={item.icon} className={`${item.icon_bg} p-2 rounded-full ${item.icon_color}`} />
					<p className=" text-center text-[18px] font-semibold">{item.title}</p>

					<div className="relative w-[100px] h-[100px]">
						<svg className="w-full h-full transform rotate-180" viewBox="0 0 36 36">
							<path
								className={`dark:text-[#1F2128] text-[#F4F5F9] ${item.progressColor_h}`}
								d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
								fill="none"
								stroke="currentColor"
								strokeWidth="4"
								strokeDasharray="100, 100"
							/>
							<path
								className={`${item.progressColor} group-hover:text-white`} // Added "group-hover:text-white"
								d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
								fill="none"
								stroke="currentColor"
								strokeWidth="4"
								strokeDasharray={`${item.percentage}, 100`}
								strokeLinecap="round"
							/>
						</svg>
						<span className="absolute inset-0 flex items-center justify-center font-bold text-xl">
							{item.percentage}%
						</span>
					</div>
				</div>

			))}
		</div>
	);
};

export default Detail;
