import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { HomeModernIcon, HeartIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';


const Geoservices = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "process.env.REACT_APP_GOOGLE_MAPS_API_KEY",
  });

  const [selectedType, setSelectedType] = useState("hospital");
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
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

  useEffect(() => {
    const fetchMarkers = async () => {
      const response = await fetch(
        `/api/places?query=${selectedType}&location=${userLocation.lat},${userLocation.lng}&radius=5000`
      );
      const data = await response.json();
      setMarkers(data.results);
    };
    if (userLocation) {
      fetchMarkers();
    }
  }, [selectedType, userLocation]);

  if (loadError) return <div className="text-red-500">Error loading maps</div>;
  if (!isLoaded) return <div className="text-gray-500">Loading Maps...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-4 mb-4">
        <button
          className={`flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${selectedType === "hospital" ? "bg-blue-700" : "opacity-50"}`}
          onClick={() => setSelectedType("hospital")}
        >
          <HomeModernIcon className="inline-block h-5 w-5 mr-2" />
          <span className="hidden md:inline-block">Hospital</span>
        </button>
        <button
          className={`flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${selectedType === "lab" ? "bg-blue-700" : "opacity-50"}`}
          onClick={() => setSelectedType("lab")}
        >
          <HeartIcon className="inline-block h-5 w-5 mr-2" />
          <span className="hidden md:inline-block">Lab</span>
        </button>
        <button
          className={`flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${selectedType === "pharmacy" ? "bg-blue-700" : "opacity-50"}`}
          onClick={() => setSelectedType("pharmacy")}
        >
          <BuildingStorefrontIcon className="inline-block h-5 w-5 mr-2" />
          <span className="hidden md:inline-block">Pharmacy</span>
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