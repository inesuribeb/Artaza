import { useState, useEffect, useRef } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useLanguage } from '../../contexts/LanguageContext';
import PropertyCart from './components/PropertyCart';
import SearchForm from './components/FilterProperty'; 
import { homes } from '../../utils/Homes';
import { useHeaderStyle } from '../../components/Header/HeaderStyleContext';
import './Properties.css';


function Properties() {
    const { t } = useLanguage();
    const gridRef = useRef(null);
    const searchFormRef = useRef(null);
    const { setHeaderClassName } = useHeaderStyle();
    
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 9;
    
    const [propertyCount, setPropertyCount] = useState(null);
    const [neighborhood, setNeighborhood] = useState(null);
    const [budget, setBudget] = useState(null);
    
    const [filteredProperties, setFilteredProperties] = useState(homes);

    const extractPriceValue = (priceString) => {
        const cleanedPrice = priceString.replace(/€/g, '').trim();
        const withoutDots = cleanedPrice.replace(/\./g, '');
        const withDecimal = withoutDots.replace(/,/g, '.');
        return parseFloat(withDecimal);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (searchFormRef.current) {
                const searchFormRect = searchFormRef.current.getBoundingClientRect();
                const headerHeight = 80; 

                if (headerHeight < searchFormRect.bottom) {
                    setHeaderClassName('white-section-active');
                } else {
                    setHeaderClassName('');
                }
            }
        };
        
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            setHeaderClassName('');
        };
    }, [setHeaderClassName]);

    useEffect(() => {
        if (!propertyCount && !neighborhood && !budget) {
            setFilteredProperties(homes);
            return;
        }
        
        let filtered = [...homes];
        
        if (propertyCount && propertyCount !== t('anyNumber')) {
            const bedroomMatch = propertyCount.match(/(\d+)/);
            if (bedroomMatch && bedroomMatch[1]) {
                const bedroomCount = parseInt(bedroomMatch[1]);
                if (!isNaN(bedroomCount)) {
                    filtered = filtered.filter(home => home.bedrooms >= bedroomCount);
                }
            }
        }
        
        if (neighborhood && neighborhood !== t('anyNeighbourhood')) {
            filtered = filtered.filter(home => {
                return home.location && home.location.toLowerCase().includes(neighborhood.toLowerCase());
            });
        }
        
        if (budget && budget !== t('anyBudget')) {
            filtered = filtered.filter(home => {
                const priceValue = extractPriceValue(home.price);
                
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
        setCurrentPage(1); 
    }, [propertyCount, neighborhood, budget, t]);

    useEffect(() => {
        // Guarda los filtros actuales en localStorage
        localStorage.setItem('propertyFilters', JSON.stringify({
            propertyCount,
            neighborhood,
            budget
        }));
        // También guardar las propiedades filtradas (IDs solamente)
        localStorage.setItem('filteredPropertyIds', JSON.stringify(
            filteredProperties.map(prop => prop.id)
        ));
    }, [propertyCount, neighborhood, budget, filteredProperties]);

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        
        if (gridRef.current) {
            const offsetTop = gridRef.current.offsetTop;
            const scrollPosition = offsetTop - 20; 
            
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleSearchResults = (count, hood, budgetValue) => {
        setPropertyCount(count);
        setNeighborhood(hood);
        setBudget(budgetValue);
    };

    return (
        <div className="properties-container">
            <div className='filter-properties' ref={searchFormRef}>
                <SearchForm onSearch={handleSearchResults} />
            </div>
            
            {filteredProperties.length > 0 ? (
                <>  
                    <div className="properties-grid" ref={gridRef}>
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