import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

function MapComponent({
  center,
  geoData,
}: {
  center?: LatLngExpression;
  geoData?: any;
}) {
  return (
    <>
      <MapContainer
        key={JSON.stringify(center)}
        center={center as LatLngExpression}
        zoom={13}
        className="h-screen w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON
          interactive={true}
          key={JSON.stringify(geoData)}
          data={geoData}
        />
        <Marker position={center as LatLngExpression}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default MapComponent;
