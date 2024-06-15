import { NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { SparklesIcon, MagnifyingGlassIcon, BellIcon, TicketIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";

const NavBarForEvents = ({photoURL}) => {
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
        return "GMT-5"; 
        };

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-sm text-white/60">
                    <SparklesIcon className="h-4 w-4 text-white/60"/>
                </li>
                
            </ul>
            <ul className="flex items-center gap-2">
                <li className="text-white/60 text-xs">
                    <div className="flex items-center gap-1">
                        <TicketIcon className="h-4 w-4 text-white/60"/>
                        Events
                    </div>
                </li>
                <li className="text-white/60 text-xs">
                    <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4 text-white/60"/>
                        Calendars
                    </div>
                </li>
                <li className="text-white/60 text-xs">
                    <div className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4 text-white/60"/>
                        Discover
                    </div>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-white/60 text-xs">
                    {formatTime(currentTime)} {formatTimeZone()}
                </li>
                <li className=" text-white text-xs">
                    Create Event 
                </li>
                <li>
                    <MagnifyingGlassIcon className="h-4 w-4 text-white/60"/>
                </li>
                <li>
                    <BellIcon className="h-4 w-4 text-white/60"/>
                </li>
                <li>
                    {photoURL ? (
                        <img src={photoURL} alt="User profile" className="h-6 w-6 rounded-full" />
                        
                    ) : (
                        <p>No photo</p>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default NavBarForEvents


    