import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Tests() {
  const [location, setLocation] = useState(null)
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    navigator.geolocation.watchPosition(position => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    }, error => console.error(error))
  }, [])

  useEffect(() => {
    if (location) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=500&type=hospital&key=AIzaSyD6scoBO74hV5-0x3BRmjJk-wsztI1L2Gk`
        )
        .then(response => {
          setHospitals(response.data.results)
        })
        .catch(error => console.error(error))
    }
  }, [location])

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <MapContainer center={[location?.lat, location?.lng]} zoom={13} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hospitals.map(hospital => (
          <Marker position={[hospital.geometry.location.lat, hospital.geometry.location.lng]}>
            <Popup>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{hospital.name}</h3>
                <p className="text-sm">{hospital.vicinity}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${hospital.geometry.location.lat},${hospital.geometry.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Get Directions
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Tests;

