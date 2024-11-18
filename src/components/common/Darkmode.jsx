import React, { useState, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';


const Darkmode = ({ setTogglevalue }) => {
    // Move the useState inside the component
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme === 'true'; // Initialize state from localStorage
    });

    // Define the toggleTheme function inside the component
    const toggleTheme = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode); // Save the new state to localStorage
            document.documentElement.classList.toggle('dark', newMode); // Toggle the dark class
            return newMode;
        });
        setTogglevalue(prevMode => {
            const newMode = !prevMode;

            return newMode;
        });

    };

    // Apply the theme on component mount and when darkMode changes
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <ToggleSwitch isOn={darkMode} onToggle={toggleTheme} />
    );
};

export default Darkmode;
