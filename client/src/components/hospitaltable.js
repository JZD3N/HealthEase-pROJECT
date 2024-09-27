import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HospitalsTable = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get('/api/hospitals')
      .then(response => response.data)
      .then(data => setHospitals(data))
      .catch(error => console.error('Error fetching hospitals:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Nearby Hospitals</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Distance</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map(hospital => (
            <tr key={hospital.place_id}>
              <td className="border px-4 py-2">{hospital.name}</td>
              <td className="border px-4 py-2">{hospital.vicinity}</td>
              <td className="border px-4 py-2">{hospital.distance?.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalsTable;

