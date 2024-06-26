import React, { useState, useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import AppStoreIcon from "../../assets/icons/app-store-ios.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

const Footerbar = () => {
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
            <div className="bottom-4 w-full text-sm font-light">
                <div className="flex items-center justify-between z-10 bottom-5 w-full py-5 px-8 text-sm font-light">
                    <ul className="flex items-center gap-3 mb-2">
                        <li className="font-semibold text-xs text-white/60">
                            <div className="flex">
                                <div className=" text-sm">
                                    luma
                                </div>
                                <SparklesIcon className="h-2 w-2 text-white/60"/>
                            </div>
                        </li>
                        <li className="text-white/60 text-xs m-2 px-3 py-0.5">
                            What's New
                        </li>
                        <li className="text-white/60 text-xs m-2 px-3 py-0.5">
                            Discover
                        </li>
                        <li className="text-white/60 text-xs m-2 px-3 py-0.5">
                            Pricing
                        </li>
                        <li className="text-white/60 text-xs m-2 px-3 py-0.5">
                            Help
                        </li>
                    </ul>
                    <ul className="flex items-center gap-3 mb-2">
                        <li className="font-semibold text-sm text-white/60">
                            <EnvelopeIcon className="h-4 w-4 text-white/60"/>
                        </li>
                        <li className="text-white/60 text-xs">
                            <img src={AppStoreIcon} alt="App Store Icon" className="h-4 w-4"/>
                        </li>
                        <li className="text-white/60 text-xs">
                            <img src={InstagramIcon} alt="Instagram Icon" className="h-4 w-4"/>
                        </li>
                        <li className="text-white/60 text-xs">
                            <img src={TwitterIcon} alt="Twitter Icon" className="h-4 w-4"/>
                        </li>
                    </ul>
                </div>
                <ul className="flex items-center justify-left gap-3 z-10 bottom-4 w-full py-5 px-8 text-sm font-light">
                        <li className="text-white/60 text-xs">
                            Terms
                        </li>
                        <li className="text-white/60 text-xs">
                            Privacy
                        </li>
                        <li className="text-white/60 text-xs">
                            Security
                        </li>
                    </ul>
            </div>
    )
}

export default Footerbar