import "./App.css";
import { GoogleMap, LoadScript, Marker, marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

function App() {
  const [position, setPosition] = useState({
    lat: null,
    lng: null,
  });
  const myPosition = {
    lat: position.latitude,
    lng: position.longitude,
  };

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
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
            <Marker position={myPosition}></Marker>
          </GoogleMap>
        </LoadScript>
      </header>
    </div>
  );
}

export default App;
