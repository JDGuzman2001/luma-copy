import React from "react";
import { useLocation } from "react-router-dom";
import NavbarForEvents from "../../Components/NavBarForEvents/NavBarForEvents";
import './Events.css'

function Events() {
  const location = useLocation();
  const photoURL = location.state?.photoURL;

  return (
    <div className=" items-center ">
        <NavbarForEvents photoURL={photoURL}/>
      <div className="flex flex-col items-center justify-center mt-40 bg-gray-600 ">
        <div className="flex">
            <h1>Events</h1>
        </div>
        
        </div>
    </div>
    
  );
}

export default Events;
