import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([
        { from: "Killan James", text: "Hi, I hope you are doing well, yesterday you have gave a pen This very nice, i am very happy for this.yesterday you have gave a pen This very nice." },
        { from: "Killan James", text: "Hi, I hope you are doing well, yesterday you gave a pen." },
        { from: "Me", text: "yea I’m well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice" },
        // { from: "Killan James", text: "Hi, I hope you are doing well, yesterday you have gave a pen This very nice 😍" },
        // { from: "Me", text: "yea I’m well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice" },
        // { from: "Killan James", text: "Hi, I hope you are doing well, yesterday you have gave a pen This very nice 😍" },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { from: "Me", text: input }]);
            setInput("");
        }
    };

    return (
        <div className="flex-1 h-screen relative lg:flex hidden flex-col justify-between border-2 border-[#F5F4F6] dark:border-[#2C303D] rounded-xl">
            <div className="flex justify-between items-center border-b-2 border-[#F5F4F6] dark:border-[#2C303D] rounded-xl p-4 w-full">
                <div className="flex items-center gap-5">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className="w-12 h-12 rounded-full object-cover" />
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
                    type='submit'
                    onClick={sendMessage}
                    className=" text-white px-4 py-2 rounded-lg"
                >
                    <img src="images/send.svg" alt="" />
                </button>
            </div>
        </div>
    )
};

export default Chat;
