import React from "react";
import { useLocation } from "react-router-dom";
import NavbarForEvents from "../../Components/NavBarForEvents/NavBarForEvents";
import './Events.css'
import EventCard from '../../Components/EventCard/EventCard'
import { useState, useEffect } from 'react'

function Events() {
  const location = useLocation();
  const photoURL = location.state?.photoURL;

  const [items, setItems] = useState(null)

  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=U3yqEyjlVYMTRBJEPhdi9gK9mwj7caNb')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        // console.log(data); // Imprime los datos recibidos en la consola
        // setItems(data._embedded.events); // Asegúrate de acceder correctamente a los eventos
        if (data._embedded && data._embedded.events) {
          // Eliminar eventos duplicados basados en el nombre
          const uniqueEvents = data._embedded.events.filter((event, index, self) =>
            index === self.findIndex((e) => e.name === event.name)
          );

          
          setItems(uniqueEvents);
        } else {
          setItems([]);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error);
      });
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
