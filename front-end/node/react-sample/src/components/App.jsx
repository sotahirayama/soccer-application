
import './../App.css';
import React, { useState ,useEffect} from 'react';
import Event from "./Event";
import { GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

import axios from 'axios'


const containerStyle = {
  width: "650px",
  height: "600px",
};

function createEvent(event) {
  return (
    <Event
      key={event.id}
      name={event.name}
      place={event.place}
      location={event.location}
    />
  );
}



function App() {
  const [position,setPosition] = useState({ latitude: null, longitude: null });
  const [events, getEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const url = 'http://localhost:8081/';
  const getAllEvents = () => {
    axios.get(`${url}events`)
    .then((response) => {
      const allEvents = response.data;
      getEvents(allEvents);
    })
    .catch(error => console.error(`Error: ${error}`));
  }



  const myPosition = {
    lat: position.latitude,
    lng: position.longitude,
  }
  

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };
  return (
    <div className="left">
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={myPosition}
          zoom={17}
          onLoad={getCurrentPosition}
        >
          <Marker position={myPosition} />
        </GoogleMap>
      </LoadScript>
      {events.map(createEvent)}
    </div>
  );
}



export default App;
