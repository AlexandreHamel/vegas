import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ place }) => {

    return (
        <div id='map'>
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={[place.latitude, place.longitude]}
                zoom={16}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[place.latitude, place.longitude]}>
                    <Popup>
                        {place.namePlace} <br /> {place.address}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LeafletMap;