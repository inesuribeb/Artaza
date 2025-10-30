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
//     const getCoordinates = (location) => {
//         const locationCoordinates = {
//             "Negurigane, Leioa": [43.3308, -2.9840],
//             "Berango": [43.3635, -2.9875],
//             "Las Arenas, Getxo": [43.3549, -2.9962],
//             "Artaza, Leioa": [43.3275, -2.9825],
//             "Centro Leioa": [43.3275, -2.9825],
//             "Sarriena, Leioa": [43.3200, -2.9750],
//             "Mungia": [43.3539, -2.8450],
//             "Algorta, Getxo": [43.3650, -2.9850],
//             "Tarifa": [36.0140, -5.6063],
//             "Leioa": [43.3275, -2.9825],
//             "Getxo": [43.3549, -2.9962],
//         };

//         return locationCoordinates[location] || [43.3275, -2.9825];
//     };

//     const coordinates = getCoordinates(property.location);

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
//                     zoom={15} 
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
//                                 {property.location}
//                             </div>
//                         </Popup>
//                     </Marker>
//                 </MapContainer>
//             </div>
//         </div>
//     )
// }

// export default MapHome;

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import './MapHome.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Caché en memoria para evitar geocodificar la misma dirección múltiples veces
const geocodeCache = {};

function MapHome({ property, language, t }) {
    const [coordinates, setCoordinates] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const geocodeAddress = async () => {
            // Obtener la dirección exacta según el idioma, o usar la ubicación general
            const exactAddress = property.exact_location?.[language];
            const addressToGeocode = exactAddress || property.location;

            // Si no hay dirección, usar coordenadas por defecto
            if (!addressToGeocode) {
                setCoordinates([43.3275, -2.9825]); // Leioa por defecto
                setLoading(false);
                return;
            }

            // Verificar si ya tenemos las coordenadas en caché
            if (geocodeCache[addressToGeocode]) {
                setCoordinates(geocodeCache[addressToGeocode]);
                setLoading(false);
                return;
            }

            try {
                // Geocodificar usando Nominatim
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addressToGeocode)}&limit=1`,
                    {
                        headers: {
                            'User-Agent': 'RealEstateApp/1.0' // Cambia esto al nombre de tu app
                        }
                    }
                );
                
                const data = await response.json();
                
                if (data && data.length > 0) {
                    const coords = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
                    // Guardar en caché
                    geocodeCache[addressToGeocode] = coords;
                    setCoordinates(coords);
                } else {
                    // Si no encuentra la dirección exacta, usar coordenadas aproximadas por zona
                    const fallbackCoords = getFallbackCoordinates(property.location);
                    geocodeCache[addressToGeocode] = fallbackCoords;
                    setCoordinates(fallbackCoords);
                }
            } catch (error) {
                console.error('Error al geocodificar:', error);
                const fallbackCoords = getFallbackCoordinates(property.location);
                setCoordinates(fallbackCoords);
            } finally {
                setLoading(false);
            }
        };

        geocodeAddress();
    }, [property, language]);

    // Coordenadas aproximadas por zona como fallback
    const getFallbackCoordinates = (location) => {
        const locationCoordinates = {
            "Negurigane, Leioa": [43.3308, -2.9840],
            "Berango": [43.3635, -2.9875],
            "Las Arenas, Getxo": [43.3549, -2.9962],
            "Artaza, Leioa": [43.3275, -2.9825],
            "Centro Leioa": [43.3275, -2.9825],
            "Centro Urbano, Leioa": [43.3275, -2.9825],
            "Sarriena, Leioa": [43.3200, -2.9750],
            "Mungia": [43.3539, -2.8450],
            "Algorta, Getxo": [43.3650, -2.9850],
            "Santa Maria de Getxo": [43.3635, -2.9700],
            "Sabino Arana, Bilbao": [43.2627, -2.9253],
            "Bilbao": [43.2630, -2.9350],
            "Leioa": [43.3275, -2.9825],
            "Getxo": [43.3549, -2.9962],
        };
        return locationCoordinates[location] || [43.3275, -2.9825];
    };

    if (loading) {
        return (
            <div className='map-home-wrapper'>
                <div className='title-info'>
                    <h1>
                        <span className="first-line">{t('aboutItsLocationFirstLine')}</span>
                        <br />
                        <span className="second-line">{t('aboutItsLocationSecondLine')}</span>
                    </h1>
                </div>
                <div className='map' style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
                    <p>Cargando mapa...</p>
                </div>
            </div>
        );
    }

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
                                {property.exact_location?.[language] || property.location}
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default MapHome;