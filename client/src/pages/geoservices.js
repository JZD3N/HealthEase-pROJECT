/**
 * Geoservices page
 *
 * This page displays a map with markers representing nearby medical
 * facilities (hospitals, labs, pharmacies). The user can select which type
 * of facility to display using the buttons above the map. The user's
 * location is used to fetch the nearby facilities.
 *
 * @return {JSX.Element}
 */
import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { HomeModernIcon, HeartIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import hospital from "../assets/hospital.png";
import Card from "../components/carddisplay";
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyCUXh4aQnm4iGFUSGqChCl0cbR5DHaoYaQ",
//   });

//   /**
//    * The type of facility to display on the map (hospital, lab, pharmacy)
//    */
//   const [selectedType, setSelectedType] = useState("");

//   /**
//    * The list of markers on the map
//    */
//   const [markers, setMarkers] = useState([]);

//   /**
//    * The currently selected marker
//    */
//   const [selectedMarker, setSelectedMarker] = useState(null);

//   /**
//    * The user's location
//    */
//   const [userLocation, setUserLocation] = useState(null);

//   /**
//    * A reference to the Google Map instance
//    */
//   const mapRef = useRef(null);

//   /**
//    * Fetch the user's location and set it to the state
//    */
//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         if (!navigator || !navigator.geolocation) {
//           throw new Error("Geolocation API not supported");
//         }

//         const position = await new Promise((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject, {
//             enableHighAccuracy: true,
//             timeout: 10000, // 10 seconds
//             maximumAge: 0 // no cached position
//           });
//         });

//         if (!position || !position.coords) {
//           throw new Error("Invalid position object returned");
//         }

//         const { latitude, longitude } = position.coords;
//         setUserLocation({
//           lat: latitude,
//           lng: longitude,
//         });
//       } catch (error) {
//         console.error("Failed to get user location: ", error);
//       }
//     };
//     fetchLocation();
//   }, []);

//   /**
//    * Fetch the nearby facilities based on the selected type and user location
//    */
//   useEffect(() => {
//     const fetchMarkers = async () => {
//       console.log("Fetching markers for selected type:", selectedType);
//       console.log("User location:", userLocation);
//       if (!userLocation) {
//         console.log("User location not available, skipping marker fetch");
//         return;
//       }

//       try {
//         const response = await fetch(
//           `/api/hospitals?query=${selectedType}&location=${userLocation.lat},${userLocation.lng}&radius=5000`
//         );

//         console.log("Received response from API:", response);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log("Received data from API:", data);
//         if (!data) {
//           throw new Error("Invalid response from API");
//         }

//         setMarkers(data);
//       } catch (error) {
//         console.error("Failed to fetch markers: ", error);
//       }
//     };
//     fetchMarkers();
//   }, [selectedType, userLocation]);
//   if (loadError) {
//     return <div className="text-red-500">Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div className="text-gray-500">Loading Maps...</div>;
//   }

//   return (
//     <div>
//       <div className="container mx-auto p-4">
//         <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-4 mb-4">
//           <button
//             className={`flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${selectedType === "hospital" ? "bg-blue-700" : "opacity-50"}`}
//             onClick={() => setSelectedType("hospital")}
//           >
//             <HomeModernIcon className="inline-block h-5 w-5 mr-2" />
//             <span className="hidden md:inline-block">Hospital</span>
//           </button>
//           <button
//             className={`flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${selectedType === "lab" ? "bg-blue-700" : "opacity-50"}`}
//             onClick={() => setSelectedType("lab")}
//           >
//             <HeartIcon className="inline-block h-5 w-5 mr-2" />
//             <span className="hidden md:inline-block">Lab</span>
//           </button>
//           <button
//             className={`flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${selectedType === "pharmacy" ? "bg-blue-700" : "opacity-50"}`}
//             onClick={() => setSelectedType("pharmacy")}
//           >
//             <BuildingStorefrontIcon className="inline-block h-5 w-5 mr-2" />
//             <span className="hidden md:inline-block">Pharmacy</span>
//           </button>
//         </div>
//         <div className="w-full h-[600px]">  
//         <GoogleMap
//           mapContainerClassName="h-[600px] w-full"
//           center={userLocation}
//           zoom={17}
//           options={{
//             disableDefaultUI: true,
//             zoomControl: true,
//           }}
//           onLoad={(map) => {
//             mapRef.current = map;
//           }}
//         >
//           {markers.map((marker) => (
//             <Marker
//               key={marker.place_id}
//               position={{ lat: marker.geometry.location.lat, lng: marker.geometry.location.lng }}
//               onClick={() => setSelectedMarker(marker)}
//             />
//           ))}
//           {selectedMarker && (
//             <InfoWindow
//               position={{ lat: selectedMarker.geometry.location.lat, lng: selectedMarker.geometry.location.lng }}
//               onCloseClick={() => setSelectedMarker(null)}
//             >
//               <div className="p-2">
//                 <h3 className="font-bold">{selectedMarker.name}</h3>
//                 <p>{selectedMarker.formatted_address}</p>
//                 {selectedMarker.photos && (
//                   <img
//                     src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedMarker.photos[0].photo_reference}&key=${'AIzaSyCUXh4aQnm4iGFUSGqChCl0cbR5DHaoYaQ'}`}
//                     alt={selectedMarker.name}
//                   />
//                 )}
//               </div>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       </div>
//       <HospitalsTable />
//     </div>
//     </div>
    
//   );
// };

// export default Geoservices;

const Geoservices = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCUXh4aQnm4iGFUSGqChCl0cbR5DHaoYaQ" ,
  });

  const [selectedType, setSelectedType] = useState("hospital");
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (!navigator || !navigator.geolocation) {
          throw new Error("Geolocation API not supported");
        }

        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000, // 10 seconds
            maximumAge: 0 // no cached position
          });
        });

        if (!position || !position.coords) {
          throw new Error("Invalid position object returned");
        }

        const { latitude, longitude } = position.coords;
        setUserLocation({
          lat: latitude,
          lng: longitude,
        });
      } catch (error) {
        console.error("Failed to get user location: ", error);
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchMarkers = async () => {
      console.log("Fetching markers for selected type:", selectedType);
      console.log("User location:", userLocation);
      if (!userLocation) {
        console.log("User location not available, skipping marker fetch");
        return;
      }

      try {
        const response = await fetch(
          `/api/hospitals?query=${selectedType}&location=${userLocation.lat},${userLocation.lng}&radius=5000`
        );

        console.log("Received response from API:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Received data from API:", data);
        if (!data) {
          throw new Error("Invalid response from API");
        }

        setMarkers(data);
      } catch (error) {
        console.error("Failed to fetch markers: ", error);
      }
    };
    fetchMarkers();
  }, [selectedType, userLocation]);

  if (loadError) {
    return <div className="text-red-500">Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div className="text-gray-500">Loading Maps...</div>;
  }

  return (
    <div>
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
        <div className="w-full h-[600px]">  
          <GoogleMap
            mapContainerClassName="h-[600px] w-full"
            center={userLocation}
            zoom={17}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
            onLoad={(map) => {
              mapRef.current = map;
            }}
          >
            {userLocation && (
              <Marker
                position={userLocation}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                }}
              />
            )}
            {markers.map((marker) => (
              <Marker
                key={marker.place_id}
                position={{ lat: marker.geometry.location.lat, lng: marker.geometry.location.lng }}
                icon={hospital}
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
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedMarker.photos[0].photo_reference}&key=${'AIzaSyCUXh4aQnm4iGFUSGqChCl0cbR5DHaoYaQ'}`}
                      alt={selectedMarker.name}
                    />
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
        <Card />
      </div>
    </div>
  );
};
export default Geoservices;