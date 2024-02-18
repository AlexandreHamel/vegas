import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = ( { place } ) => {

    const lat = place.latitude;
    const long = place.longitude

    const position = [36.11589001, -115.17322117]

    console.log(lat);
    console.log(long);


    return (
        <div id='map'>
            <MapContainer 
                style={{height: '100%', width: '100%'}}
                center={ position } 
                zoom={16} 
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={ position }>
                    <Popup>
                        {place.namePlace} <br /> {place.address}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LeafletMap;