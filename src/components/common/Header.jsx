import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ToggleSwitch from './ToggleSwitch';
import Darkmode from './Darkmode';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = ({ setTogglevalue, toggleMobileSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className='sticky top-0 z-50 dark:bg-[#242731] backdrop-blur-md border-b dark:border-[#242731] bg-white border-white'>
            <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center mb-'>
                    <div className='sm:hidden flex' onClick={() => toggleMobileSidebar()}>
                        {/* <Logo size={24} /> */}
                    </div>

                    <div className='relative sm:flex hidden'>
                        <input
                            type='text'
                            placeholder='Search products...'
                            className='dark:bg-[#1F2128] bg-[#F5F4F6] text-[#7C7C8D] placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#373737] '
                        />
                        <Search className='absolute left-3 top-2.5 text-[#7C7C8D]' size={18} />
                    </div>

                    <div className='flex sm:justify-normal justify-between items-center gap-5'>
                        {/* <ToggleSwitch isOn={darkMode} onToggle={toggleTheme} /> */}
                        <Darkmode setTogglevalue={setTogglevalue} />
                        <Link to="/notification">
                            <img src='images/notification.svg' className='cursor-pointer' />
                        </Link>

                        <div className="relative">
                            <img 
                                src='images/header-img.png' 
                                className='cursor-pointer' 
                                onClick={toggleDropdown} // Add click handler to toggle dropdown
                                alt="Profile"
                            />

                            {/* Conditionally render the dropdown */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1F2128] rounded-md shadow-lg py-2">
                                    {/* <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Profile
                                    </Link> */}
                                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Settings
                                    </Link>
                                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
