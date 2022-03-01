
import './../App.css';
import React, { useState ,useEffect} from 'react';
import Events from "./Event";
import { GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

// import axios from 'axios'


const containerStyle = {
  width: "400px",
  height: "400px",
};


// function createCard(contact) {
//   return (
//     <Card
//       key={contact.id}
//       name={contact.name}
//       img={contact.imgURL}
//       tel={contact.phone}
//       email={contact.email}
//     />
//   );
// }


function App() {
  const [position,setPosition] = useState({ latitude: null, longitude: null });
  // const [notes, getNotes] = useState('');

  // useEffect(() => {
  //   getAllNotes();
  // }, []);

  //const url = 'http://localhost:8081/';
  //const getAllNotes = () => {
  //   axios.get(`${url}past`)
  //   .then((response) => {
  //     GeolocationCoordinates(allNotes);
  //   })
  //   .catch(error => console.error(`Error: $(eroor)`));
  // }



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
    
    <div className="App">
      <header className="App-header">
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
      <Events></Events>
      {/* {contacts.map(createCard)} */}
      </header>
    </div>
  );
}



export default App;
