import { useState, useEffect } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useLanguage } from '../../contexts/LanguageContext';
import PropertyCart from './components/PropertyCart';
import SearchForm from './components/FilterProperty'; 
import { homes } from '../../utils/Homes';
import './Properties.css';

function Properties() {
    const { t } = useLanguage();
    
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 9;
    
    // Estados para los filtros de búsqueda
    const [propertyCount, setPropertyCount] = useState(null);
    const [neighborhood, setNeighborhood] = useState(null);
    const [budget, setBudget] = useState(null);
    
    // Estado para las propiedades filtradas
    const [filteredProperties, setFilteredProperties] = useState(homes);

    // Función para convertir cadenas de precio a números
    const extractPriceValue = (priceString) => {
        // Elimina el símbolo de euro y cualquier espacio
        const cleanedPrice = priceString.replace(/€/g, '').trim();
        // Reemplaza los puntos de miles con nada (asumiendo formato europeo)
        const withoutDots = cleanedPrice.replace(/\./g, '');
        // Reemplaza comas con puntos para decimales si existen
        const withDecimal = withoutDots.replace(/,/g, '.');
        // Convierte a número
        return parseFloat(withDecimal);
    };

    // Aplicar filtros cuando cambien los criterios de búsqueda
    useEffect(() => {
        if (!propertyCount && !neighborhood && !budget) {
            setFilteredProperties(homes);
            return;
        }
        
        let filtered = [...homes];
        
        // Filtrar por número de propiedades
        if (propertyCount && propertyCount !== t('anyNumber')) {
            // Extraer el número de la cadena (por ejemplo "3+ bedrooms" -> 3)
            const bedroomMatch = propertyCount.match(/(\d+)/);
            if (bedroomMatch && bedroomMatch[1]) {
                const bedroomCount = parseInt(bedroomMatch[1]);
                if (!isNaN(bedroomCount)) {
                    filtered = filtered.filter(home => home.bedrooms >= bedroomCount);
                }
            }
        }
        
        // Filtrar por vecindario - ahora busca en la propiedad "location"
        if (neighborhood && neighborhood !== t('anyNeighbourhood')) {
            filtered = filtered.filter(home => {
                // Comprueba si home.location existe y luego si contiene el barrio buscado
                return home.location && home.location.toLowerCase().includes(neighborhood.toLowerCase());
            });
        }
        
        // Filtrar por presupuesto
        if (budget && budget !== t('anyBudget')) {
            filtered = filtered.filter(home => {
                // Primero convertimos el precio a número
                const priceValue = extractPriceValue(home.price);
                
                // Luego aplicamos el filtro según el rango seleccionado
                if (budget === t('budget400to600')) {
                    return priceValue >= 400000 && priceValue <= 600000;
                } else if (budget === t('budget600to800')) {
                    return priceValue >= 600000 && priceValue <= 800000;
                } else if (budget === t('budget800to1M')) {
                    return priceValue >= 800000 && priceValue <= 1000000;
                } else if (budget === t('budget1MPlus')) {
                    return priceValue > 1000000;
                }
                return true;
            });
        }
        
        setFilteredProperties(filtered);
        setCurrentPage(1); // Resetear a la primera página cuando cambian los filtros
    }, [propertyCount, neighborhood, budget, t]);

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    // Manejar los resultados de búsqueda
    const handleSearchResults = (count, hood, budgetValue) => {
        setPropertyCount(count);
        setNeighborhood(hood);
        setBudget(budgetValue);
    };

    return (
        <div className="properties-container">
            <div className='filter-properties'>
                <SearchForm onSearch={handleSearchResults} />
            </div>
            
            {filteredProperties.length > 0 ? (
                <>
                    {/* <div className="properties-count">
                        <p>{filteredProperties.length} {t('propertiesFound')}</p>
                    </div> */}
                    
                    <div className="properties-grid">
                        {currentProperties.map((home) => (
                            <PropertyCart key={home.id} property={home} />
                        ))}
                    </div>
                    
                    {totalPages > 1 && (
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`pagination-button ${currentPage === number ? 'active' : ''}`}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div className="no-results">
                    <p>{t('noResults')}</p>
                </div>
            )}
        </div>
    );
}

export default Properties;