import { Search } from "lucide-react";
import React, { useState } from "react";

import user1 from "./user/m-user1.svg"
import user2 from "./user/m-user2.svg"
import user3 from "./user/m-user3.svg"
import user4 from "./user/m-user4.svg"
import user5 from "./user/m-user5.svg"
import user6 from "./user/m-user6.svg"
import user7 from "./user/m-user7.svg"
import user8 from "./user/m-user8.svg"

const data = [
    { title: "PINNED", img: user1, name: "Killan James", msj: "Typing...", time: "4:30 PM", msjcount: "2" },
    { title: "PINNED", img: user2, name: "Desian Tam", msj: "Hello! Everyone", time: "9:36 AM", msjcount: "4" },
    { title: "PINNED", img: user3, name: "Ahmed Medi", msj: "Wow really Cool 🔥", time: "1:15 AM", msjcount: "1" },
    { title: "All Message", img: user4, name: "Claudia Maudi", msj: "Nice", time: "4:30 PM", msjcount: "2" },
    { title: "All Message", img: user5, name: "Novita", msj: "yah, nice design", time: "4:30 PM", msjcount: "3" },
    { title: "All Message", img: user6, name: "Milie Nose", msj: "Awesome 🔥", time: "8:20 PM", msjcount: "2" },
    { title: "All Message", img: user7, name: "Ikhsan SD", msj: "Voice message", time: "yesterday", msjcount: "1" },
    { title: "All Message", img: user8, name: "Aditya", msj: "publish now", time: "yesterday", msjcount: "2" },
]

function Chat() {
    const [messages, setMessages] = useState([
        { from: "Killan James", text: "Hi, I hope you are doing well, yesterday you have gave a pen This very nice, i am very happy for this.yesterday you have gave a pen This very nice." },
        { from: "Killan James", text: "Hi, I hope you are doing well, yesterday you gave a pen." },
        { from: "Me", text: "yea I’m well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice" },
        { from: "Killan James", text: "Hi, I hope you are doing well, yesterday you have gave a pen This very nice 😍" },
        { from: "Me", text: "yea I’m well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice" },
        { from: "Killan James", text: "Hi, I hope you are doing well, yesterday you have gave a pen This very nice 😍" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const [input, setInput] = useState("");
  
    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { from: "Me", text: input }]);
            setInput("");
        }
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#242731] p-6 gap-6">
            {/* Left Sidebar */}
            <div className="w-full md:w-1/3">
                <h1 className='dark:text-white text-[#242731] text-[30px] font-bold mb-6 flex justify-between items-center'>Messages <span> <img src="images/message-pen.svg" alt="" /> </span> </h1>
                <div className="space-y-7 cursor-pointer">
                    <div className='relative'>
                        <input
                            type='text'
                            placeholder='Search products...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='dark:bg-[#1F2128] w-full bg-[#F5F4F6] text-[#7C7C8D] placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#373737]'
                        />
                        <Search className='absolute left-3 top-2.5 text-[#7C7C8D]' size={18} />
                    </div>
                    <p className="flex items-center gap-1 text-sm"> <span><img src="images/pinned.svg" alt="" /></span> PINNED</p>
                    {filteredData.map((items) => {
                        return (
                            <>
                                {items.title === "PINNED" &&
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex items-center gap-2">
                                            <img src={items.img} alt="avatar" className="" />
                                            <div>
                                                <h3 className="font-bold text-[#1A1D1F] dark:text-white">{items.name}</h3>
                                                <p className="text-sm text-[#A9ABAD] dark:text-[#A9ABAD]">{items.msj}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 text-center">
                                            <p className="text-[13px] font-medium text-[#A9ABAD] ">{items.time}</p>
                                            <p className=" bg-[#FF6370] rounded-full text-white w-6 ml-7">{items.msjcount}</p>
                                        </div>
                                    </div>
                                }
                            </>
                        )
                    })}
                    <p className="flex items-center gap-1 text-sm"> <span><img src="images/allmessage.svg" alt="" /></span> All Message</p>
                    {filteredData.map((items) => {
                        return (
                            <>
                                {items.title === "All Message" &&
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex items-center gap-2">
                                            <img src={items.img} alt="avatar" className="" />
                                            <div>
                                                <h3 className="font-bold text-[#1A1D1F] dark:text-white">{items.name}</h3>
                                                <p className="text-sm text-[#A9ABAD] dark:text-[#A9ABAD]">{items.msj}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 text-center">
                                            <p className="text-[13px] font-medium text-[#A9ABAD] ">{items.time}</p>
                                            <p className=" bg-[#FF6370] rounded-full text-white w-6 ml-7">{items.msjcount}</p>
                                        </div>
                                    </div>
                                }
                            </>
                        )
                    })}
                </div>
            </div>

            {/* Chat Section */}
            <div className="flex-1 relative lg:flex hidden flex-col justify-between border-2 border-[#F5F4F6] dark:border-[#2C303D] rounded-xl">
                <div className="flex justify-between items-center border-b-2 border-[#F5F4F6] dark:border-[#2C303D] rounded-xl p-4 w-full">
                    <div className="flex items-center gap-5">
                        <img src="images/m-user1.svg" alt="" />
                        <div>
                            <h1 className="text-[16px] font-medium text-[#363D48] dark:text-white ">Killan James</h1>
                            <p className="text-[14px] font-normal text-[#818891] dark:text-[#818891] ">Active now</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src="images/video.svg" alt="" className="dark:hidden bg-[#F2F6F8] p-3 rounded-full cursor-pointer" />
                        <img src="images/w-video.svg" alt="" className="hidden dark:flex bg-[#2C303D] p-3 rounded-full cursor-pointer" />

                        <img src="images/call.svg" alt="" className="dark:hidden bg-[#F2F6F8] p-3 rounded-full cursor-pointer" />
                        <img src="images/w-call.svg" alt="" className="hidden dark:flex bg-[#2C303D] p-3 rounded-full cursor-pointer" />

                        <img src="images/3dot.svg" alt="" className="dark:hidden bg-[#F2F6F8] p-3 rounded-full cursor-pointer" />
                        <img src="images/w-3dot.svg" alt="" className="hidden dark:flex bg-[#2C303D] p-3 rounded-full cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col space-y-4 overflow-y-auto p-4">
                    {/* Messages */}
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.from === "Me" ? "justify-end" : ""}`}>
                            <div
                                className={`p-3 rounded-lg max-w-md my-2 ${msg.from === "Me" ? "bg-[#A162F7] text-white" : "bg-[#F5F6FA] dark:bg-[#2B2E38] text-[#242731] dark:text-[#E0E4E7] "
                                    }`}
                            >
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Section */}
                <div className="flex items-center m-4 bg-[#F5F6FA] dark:bg-[#2B2E38] border border-[#E9E9F2] dark:border-[#333848] rounded-xl p-1 px-4">
                    <img src="images/link.svg" alt="" />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something..."
                        className="w-full p-2 bg-transparent rounded-lg focus:outline-none text-[#757575] dark:text-[#7C7C8D]"
                    />
                    <button
                        onClick={sendMessage}
                        className=" text-white px-4 py-2 rounded-lg"
                    >
                        <img src="images/send.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
