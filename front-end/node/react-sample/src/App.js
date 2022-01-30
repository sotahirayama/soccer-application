import "./App.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
          ></GoogleMap>
        </LoadScript>
      </header>
    </div>
  );
}

export default App;
