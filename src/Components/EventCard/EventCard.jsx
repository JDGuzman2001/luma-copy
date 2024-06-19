import React from 'react';
import { format, parseISO } from 'date-fns'; // Importa las funciones necesarias de date-fns

const EventCard = (data) => {
    console.log(data.data.dates.start.localDate);
    // Obtén la fecha en formato ISO para asegurar la compatibilidad con parseISO
    const startDate = parseISO(data.data.dates.start.localDate);

    // Función para obtener el nombre del mes desde el número del mes (0-11)
    const getMonthName = (monthNumber) => {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return months[monthNumber];
    };

    // Función para obtener el nombre del día de la semana desde el número del día (0-6)
    const getDayOfWeek = (dayNumber) => {
        const daysOfWeek = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        return daysOfWeek[dayNumber];
    };

    // Formatear la fecha como 'NombreDia, NombreMes dia'
    const formattedDate = `${getMonthName(startDate.getMonth())} ${startDate.getDate()}`;
    const formattedDay = `${getDayOfWeek(startDate.getDay())}`
    return (
        <div className='flex'>
            <div className='w-32'>
                <p className="text-sm font-bold mb-1 text-white">{formattedDate}</p>
                <p className="text-sm font-light mb-2 text-white">{formattedDay}</p>
            </div>
            <div className="flex items-center w-full max-w-screen-lg rounded-lg shadow-lg p-4 bg-white/10 mb-10">
                <div className="flex-1">
                    <p className="text-sm font-light mb-4 text-white">{data.data.name}</p>
                </div>
                <figure className="ml-4 w-24 h-24">
                     <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0].url} alt="Event" />
                </figure>
             </div>
        </div>
    );
};

export default EventCard;
