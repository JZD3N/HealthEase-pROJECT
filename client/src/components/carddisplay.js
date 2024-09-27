import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HOSP from '../assets/hospital.png';
const Card = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get('/api/hospitals')
      .then(response => response.data)
      .then(data => setHospitals(data))
      .catch(error => console.error('Error fetching hospitals:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {hospitals.map(hospital => (
        <div key={hospital.place_id} className="bg-white rounded-lg shadow-md p-4 h-full min-h-[250px] flex flex-col">
          <div className="flex items-center justify-center">
            <img src={HOSP} alt={hospital.name} className="h-16 w-16 rounded-full" />
            
          </div>
          <div className="mt-4 text-sm center">
            <h2 className="text-2xl font-bold ml-4">{hospital.name}</h2>
            <p className="mb-2">{hospital.vicinity}</p>
            <p className="mb-2">{hospital.formatted_phone_number}</p>
            <p className="mb-2">{hospital.business_status === 'OPERATIONAL' ? 'Open Now' : 'CLOSED'}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${hospital.geometry.location.lat},${hospital.geometry.location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Get Directions
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
