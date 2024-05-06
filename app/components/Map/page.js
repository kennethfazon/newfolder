import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const mapContainerStyle = {
  height: '400px',
  width: '100%',
};

function MapDesign() {
  const gubatLocation = [12.9170, 124.0713]; // Gubat, Sorsogon coordinates

  return (
    <MapContainer center={gubatLocation} zoom={13} style={mapContainerStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      <Marker position={gubatLocation} />
    </MapContainer>
  );
}

export default MapDesign;