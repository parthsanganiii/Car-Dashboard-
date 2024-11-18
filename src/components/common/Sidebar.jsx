import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Header from "./Header";

// Define sidebar items
const SIDEBAR_ITEMS = [
    {
        name: "Dashboard",
        icon: "images/dashboard-icon.svg",
        href: "/dashboard",
    },
    {
        name: "Assets",
        icon: "images/assest.svg",
        href: "/assets",
    },
    {
        name: "Booking",
        icon: "images/booking.svg",
        href: "/booking",
    },
    {
        name: "Sell Cars",
        icon: "images/sell-cars.svg",
        href: "/sell-cars",
    },
    {
        name: "Buy Cars",
        icon: "images/buy-car.svg",
        href: "/buy-car",
    },
    {
        name: "Services",
        icon: "images/services.svg",
        href: "/services",
    },
    {
        name: "Calendar",
        icon: "images/calender.svg",
        href: "/calender",
    },
    {
        name: "Messages",
        icon: "images/messages.svg",
        href: "/messages",
    },
    {
        name: "Settings",
        icon: "images/settings.svg",
        href: "/settings",
    },
    {
        name: "Log In",
        icon: "images/login.svg",
        href: "/",
    },
    {
        name: "Log Out",
        icon: "images/logout.svg",
        href: "/",
    },
];

const Sidebar = () => {
    const location = useLocation();  // For tracking the active route
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open state for desktop
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // Sidebar open state for mobile
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detect dark mode by observing the class on the <html> tag
    useEffect(() => {
        const htmlElement = document.documentElement;
        const observer = new MutationObserver(() => {
            setIsDarkMode(htmlElement.classList.contains("dark"));
        });

        observer.observe(htmlElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Set initial state
        setIsDarkMode(htmlElement.classList.contains("dark"));

        return () => {
            observer.disconnect();
        };
    }, []);

    // Toggle mobile sidebar
    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    return (
        <>
            {/* Mobile Sidebar */}
            {/* <AnimatePresence>
                {isMobileSidebarOpen && (
                    <motion.div
                        className={`fixed z-20 top-0 left-0 w-full h-screen bg-white dark:bg-[#242731] sm:hidden transition-colors duration-3000 border-b dark:border-[#242731] border-white`}
                        // initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        // exit={{ x: "-100%", opacity: 0 }}
                    >
                        <div className="p-5 flex flex-col h-full overflow-auto">
                            <div className="flex items-center justify-between gap-4 mb-4" onClick={toggleMobileSidebar}>
                                <div className="flex items-center gap-5">
                                    <Logo size={24} />
                                    <img
                                        src={isDarkMode ? "images/motiv.svg" : "images/w_motiv.svg"}
                                        alt="Logo"
                                    />
                                </div>
                                <button onClick={toggleMobileSidebar} aria-label="Close sidebar">
                                    <img
                                        src={isDarkMode ? "images/close-w.svg" : "images/close.svg"}
                                        className="w-6"
                                    />
                                </button>
                            </div>
                            <nav className="flex-grow mt-5">
                                {SIDEBAR_ITEMS.map((item) => (
                                    <Link key={item.href} to={item.href} onClick={toggleMobileSidebar}>
                                        <motion.div
                                            className={`flex items-center p-3 text-sm font-medium rounded-lg transition-colors mb-2 
                                ${item.name === "Log In" ? "hidden" : ""} 
                                ${location.pathname === item.href ? "dark:bg-[#292E3D] bg-[#F3F5F8] text-[#5F6165] dark:text-white" : ""} 
                                dark:hover:bg-[#292E3D] hover:bg-[#F3F5F8] hover:text-[#5F6165] dark:hover:text-white`}
                                        >
                                            <img src={item.icon} alt={`${item.name} icon`} />
                                            <span className="ml-4">{item.name}</span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
                <div className="hidden">
                    <Header toggleMobileSidebar={toggleMobileSidebar} />
                </div>
            </AnimatePresence> */}

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileSidebarOpen && (
                    <motion.div
                        className={`fixed z-20 top-0 left-0 w-full h-screen bg-white dark:bg-[#242731] sm:hidden transition-colors duration-3000 border-b dark:border-[#242731] border-white`}
                        initial={{ x: "-100%", opacity: 1 }} // Sidebar starts off-screen
                        animate={{ x: 0, opacity: 1 }}       // Slides into view
                        exit={{ x: "-100%", opacity: 1 }}     // Slides out of view
                        transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth animation
                    >
                        <div className="p-5 flex flex-col h-full overflow-auto">
                            <div className="flex items-center justify-between gap-4 mb-4" onClick={toggleMobileSidebar}>
                                <div className="flex items-center gap-5">
                                    <Logo size={24} />
                                    <img
                                        src={isDarkMode ? "images/motiv.svg" : "images/w_motiv.svg"}
                                        alt="Logo"
                                    />
                                </div>
                                <button onClick={toggleMobileSidebar} aria-label="Close sidebar">
                                    <img
                                        src={isDarkMode ? "images/close-w.svg" : "images/close.svg"}
                                        className="w-6"
                                    />
                                </button>
                            </div>
                            <nav className="flex-grow mt-5">
                                {SIDEBAR_ITEMS.map((item) => (
                                    <Link key={item.href} to={item.href} onClick={toggleMobileSidebar}>
                                        <motion.div
                                            className={`flex items-center p-3 text-sm font-medium rounded-lg transition-colors mb-2 
                                ${item.name === "Log In" ? "hidden" : ""} 
                                ${location.pathname === item.href ? "dark:bg-[#292E3D] bg-[#F3F5F8] text-[#5F6165] dark:text-white" : ""} 
                                dark:hover:bg-[#292E3D] hover:bg-[#F3F5F8] hover:text-[#5F6165] dark:hover:text-white`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <img src={item.icon} alt={`${item.name} icon`} />
                                            <span className="ml-4">{item.name}</span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Sidebar for larger screens */}
            <motion.div
                className={`relative bg-white z-10 transition-all duration-300 ease-in-out flex-shrink-0 hidden sm:block
                    ${isSidebarOpen ? "w-64" : "w-20"}`}
                animate={{ width: isSidebarOpen ? 256 : 80 }}
            >
                <div className="h-full dark:bg-[#242731] backdrop-blur-md p-4 flex flex-col border-r dark:border-[#242731] border-white bg-white">
                    <motion.div
                        // whileHover={{ scale: 1.1 }}
                        // whileTap={{ scale: 0.9 }}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="flex items-center p-2 text-sm font-medium rounded-lg transition-colors mb-2"
                    >
                        <Logo size={24} />
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.span
                                    className="ml-4 whitespace-nowrap"
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2, delay: 0.3 }}
                                >
                                    <img
                                        src={isDarkMode ? "images/motiv.svg" : "images/w_motiv.svg"}
                                        alt="Logo"
                                    />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <nav className="mt-8 flex-grow">
                        {SIDEBAR_ITEMS.map((item) => (
                            <Link key={item.href} to={item.href}>
                                <motion.div
                                    className={`flex items-center p-3 text-sm font-medium rounded-lg transition-colors mb-2 
                                    ${location.pathname === item.href ? "dark:bg-[#292E3D] bg-[#F3F5F8] text-[#5F6165] dark:text-white" : ""} 
                                    dark:hover:bg-[#292E3D] hover:bg-[#F3F5F8] hover:text-[#5F6165] dark:hover:text-white ${item.name == "Log In" ? "hidden" : ""}
                                    ${item.name === "Settings" ? "absolute bottom-10 w-[87%]" : ""} ${item.name === "Log Out" ? "absolute bottom-0 w-[87%]" : ""}`}
                                >
                                    <img src={item.icon} alt={`${item.name} icon`} />
                                    <AnimatePresence>
                                        {isSidebarOpen && (
                                            <motion.span
                                                className="ml-4 whitespace-nowrap"
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, delay: 0.3 }}
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </motion.div>

            {/* Mobile Sidebar Toggle Button */}
            {!isMobileSidebarOpen && (  // Only show the button when the sidebar is closed
                <button
                    className="sm:hidden fixed top-4 left-2 z-30 p-3"
                    onClick={toggleMobileSidebar}
                >
                    <img
                        src={isDarkMode ? "images/bars-w.svg" : "images/bars.svg"}
                        alt="Toggle Sidebar"
                    />
                </button>
            )}
        </>
    );
};

export default Sidebar;
