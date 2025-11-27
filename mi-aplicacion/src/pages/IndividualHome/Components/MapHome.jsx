// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import './MapHome.css';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// function MapHome({ property, language, t }) {
//     const coordinates = property.coordinates || [43.3275, -2.9825];

//     return (
//         <div className='map-home-wrapper'>
//             <div className='title-info'>
//                 <h1>
//                     <span className="first-line">{t('aboutItsLocationFirstLine')}</span>
//                     <br />
//                     <span className="second-line">{t('aboutItsLocationSecondLine')}</span>
//                 </h1>
//             </div>

//             <div className='map'>
//                 <MapContainer 
//                     center={coordinates} 
//                     zoom={16} 
//                     style={{ height: '400px', width: '100%' }}
//                     scrollWheelZoom={false}
//                 >
//                     <TileLayer
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
//                         url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
//                     />
//                     <Marker position={coordinates}>
//                         <Popup>
//                             <div>
//                                 <strong>{property.title?.[language] || property.title}</strong>
//                                 <br />
//                                 {property.exact_location?.[language] || property.location}
//                             </div>
//                         </Popup>
//                     </Marker>
//                 </MapContainer>
//             </div>
//         </div>
//     );
// }

// export default MapHome;


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './MapHome.css';

// Crear un icono circular personalizado
const createCustomIcon = () => {
    return L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
};

function MapHome({ property, language, t }) {
    const coordinates = property.coordinates || [43.3275, -2.9825];

    return (
        <div className='map-home-wrapper'>
            <div className='title-info'>
                <h1>
                    <span className="first-line">{t('aboutItsLocationFirstLine')}</span>
                    <br />
                    <span className="second-line">{t('aboutItsLocationSecondLine')}</span>
                </h1>
            </div>

            <div className='map'>
                <MapContainer
                    center={coordinates}
                    zoom={16}
                    style={{ height: '500px', width: '100%' }}
                    scrollWheelZoom={false}
                >
                    {/* <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    /> */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={coordinates} icon={createCustomIcon()}>
                        <Popup>
                            <div>
                                <strong
                                    dangerouslySetInnerHTML={{
                                        __html: property.title?.[language] || property.title
                                    }}
                                />
                                <br />
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: property.exact_location?.[language] || property.location
                                    }}
                                />
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default MapHome;