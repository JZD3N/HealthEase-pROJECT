import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const Geoservices = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("hospital");
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.error("Failed to get user location.");
        }
      );
    }
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;

    try {
      const response = await fetch(
        `/api/places?query=${searchQuery}${searchType}&location=${userLocation.lat},${userLocation.lng}&radius=5000`
      );
      const data = await response.json();
      setMarkers(data.results);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search for hospitals, labs, or pharmacies"
          className="border border-gray-400 rounded-md py-2 px-4 w-full md:w-auto mr-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)}
          className="border border-gray-400 rounded-md py-2 px-4 w-full md:w-auto mr-2"
        >
          <option value="hospital">Hospital</option>
          <option value="lab">Lab</option>
          <option value="pharmacy">Pharmacy</option>
        </select>
        <button 
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Search
        </button>
      </div>
      <GoogleMap
        mapContainerClassName="h-[600px] w-full" 
        center={userLocation}
        zoom={10}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.place_id}
            position={{ lat: marker.geometry.location.lat, lng: marker.geometry.location.lng }}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.geometry.location.lat, lng: selectedMarker.geometry.location.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="p-2">
              <h3 className="font-bold">{selectedMarker.name}</h3>
              <p>{selectedMarker.formatted_address}</p>
              {selectedMarker.photos && (
                <img
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedMarker.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                  alt={selectedMarker.name}
                />
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Geoservices;

