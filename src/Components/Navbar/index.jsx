import { NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    
      const formatTime = (date) => {
        const hours = date.getHours();
        const amPm = hours < 12 ? "AM" : "PM";
        const formattedHours = hours % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${formattedHours}:${minutes} ${amPm}`;
      };
    
      const formatTimeZone = () => {
        return "GMT-5"; // Fixed GMT-5 offset
      };

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg text-white">
                    ✨
                </li>
                
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-white/60">
                    {/* juandiegouzmanjaimes11@gmail.com */}
                    {formatTime(currentTime)} {formatTimeZone()}
                </li>
                <li className=" text-white/60 text-xs m-2 px-3 py-0.5">
                    Explore Events ↗️
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className="bg-white/10 rounded-lg text-white/60 text-xs m-2 px-3 py-0.5"
                    >Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar