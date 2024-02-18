import React from 'react';
import LeafletMap from './LeafletMap';

const Detail = ( { place } ) => {

    // const [mapData, setMapData] = useState(null);

    // useEffect(() => {
    //     if (place.latitude !== undefined && place.longitude !== undefined) {
    //         setMapData(<LeafletMap latitude={place.latitude} longitude={place.longitude} />)
    //     }
    // }, [place]);  

    console.log(place);

    return (
        <>
            <div className='container'>
                {/* <p> {place.category.nameCategory} </p> */}
                <div className="detail">
                    <img src={`http://127.0.0.1:8000/storage/uploads/${place.picture}`} alt={place.picture} />
                    <div className="detail-side">
                        <h1> {place.namePlace && place.namePlace.toUpperCase()} </h1>
                        <p> {place.description}</p>
                        <p> {place.extras} </p>
                        <address>
                            <h4>Adresse : </h4>
                            <p> {place.address}</p>
                        </address>
                        <h4>Coordonnées GPS: </h4>
                        <p> {place.latitude}, {place.longitude} </p>
                    </div>
                </div>
                <div className="detail-map">
                    <h2>Localisation :</h2>
                    {/* {mapData} */}
                    <LeafletMap place={place} />
                </div>
            </div>
        </>
    );
};

export default Detail;