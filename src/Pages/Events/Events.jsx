import React from "react";
import { useLocation } from "react-router-dom";
import NavbarForEvents from "../../Components/NavBarForEvents/NavBarForEvents";
import './Events.css'
import EventCard from '../../Components/EventCard/EventCard'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Events() {
  const location = useLocation();
  const photoURL = location.state?.photoURL;

  const [items, setItems] = useState(null)

  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    const fetchEvents =  async () => {
      const apiKey = 'U3yqEyjlVYMTRBJEPhdi9gK9mwj7caNb';
      const city = 'Houston';

      const currentDate = new Date();
      
      const endDate = new Date(currentDate);
      endDate.setDate(currentDate.getDate() + 7);
      

      // const startDateStr = currentDate.toISOString();
      // const endDateStr = endDate.toISOString();

      const formatDate = (date) => {
        return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
      };

      const startDateStr = formatDate(currentDate);
      const endDateStr = formatDate(endDate);

      const params = {
        apikey: apiKey,
        city: city,
        startDateTime: startDateStr,
        endDateTime: endDateStr,
        sort: 'date,asc',
      };

      try {
        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', { params });
        if (response.data._embedded) {
          setItems(response.data._embedded.events);
        } else {
          setItems([]);
        }
      } catch (error) {
        setError(error);
      } 
    };
    fetchEvents();
  }, []);

  return (
    <div className=" items-center ">
        <NavbarForEvents photoURL={photoURL}/>
        <div className="flex flex-col items-center justify-center mt-52 ml-10 mr-80">
        <div className="flex justify-between w-full max-w-screen-lg mb-10">
            <h1 className="text-3xl font-bold text-white">Events</h1>
            <div className="flex space-x-2">
              <button
                className={`py-2 px-4 rounded-l-md ${activeTab === 'upcoming' ? 'bg-gray-500 text-gray-300' : 'bg-gray-700 text-white'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={`py-2 px-4 rounded-r-md ${activeTab === 'past' ? 'bg-gray-500 text-gray-300' : 'bg-gray-700 text-white'}`}
                onClick={() => setActiveTab('past')}
              >
                Past
              </button>
            </div>
          </div>
          {
            items ? (
              <div className='w-full max-w-screen-lg'>
                {
                  items.map(item => (
                    <EventCard key={item.id} data={item}/>
                  ))
                }
              </div>
            ) : (
              <div className='flex flex-col items-center mt-500 text-white '>
                Loading...
              </div>
            )
          }
        </div>
    </div>
    
  );
}

export default Events;
