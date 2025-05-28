// import './MapHome.css';

// function MapHome({ property, language, t }) {
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

//             </div>
//         </div>
//     )
// }

// export default MapHome;


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './MapHome.css';

// Fix para los iconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapHome({ property, language, t }) {
    // Función para obtener coordenadas basadas en la ubicación
    const getCoordinates = (location) => {
        // Mapeo de ubicaciones de los objetos homes y TarifaHomes
        const locationCoordinates = {
            "Negurigane, Leioa": [43.3308, -2.9840],
            "Berango": [43.3635, -2.9875],
            "Las Arenas, Getxo": [43.3549, -2.9962],
            "Artaza, Leioa": [43.3275, -2.9825],
            "Centro Leioa": [43.3275, -2.9825],
            "Sarriena, Leioa": [43.3200, -2.9750],
            "Mungia": [43.3539, -2.8450],
            "Algorta, Getxo": [43.3650, -2.9850],
            "Tarifa": [36.0140, -5.6063],
            // Ubicaciones generales como fallback
            "Leioa": [43.3275, -2.9825],
            "Getxo": [43.3549, -2.9962],
        };

        return locationCoordinates[location] || [43.3275, -2.9825]; // Default a Leioa centro
    };

    const coordinates = getCoordinates(property.location);

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
                    zoom={15} 
                    style={{ height: '400px', width: '100%' }}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={coordinates}>
                        <Popup>
                            <div>
                                <strong>{property.title?.[language] || property.title}</strong>
                                <br />
                                {property.location}
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default MapHome;