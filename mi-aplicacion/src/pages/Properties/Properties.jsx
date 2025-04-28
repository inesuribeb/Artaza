// import { useState } from 'react';
// import { useLanguage } from '../../contexts/LanguageContext';
// import PropertyCart from './components/PropertyCart';
// import { homes } from '../../utils/Homes';
// import './Properties.css'

// function Properties() {
//     const { t } = useLanguage();
//     const [currentPage, setCurrentPage] = useState(1);
//     const propertiesPerPage = 9;

//     const indexOfLastProperty = currentPage * propertiesPerPage;
//     const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
//     const currentProperties = homes.slice(indexOfFirstProperty, indexOfLastProperty);
//     const totalPages = Math.ceil(homes.length / propertiesPerPage);


//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth' 
//         });
//     };

//     return (
//         <div className="properties-container">

//             <div className='filter-properties'>
                
//             </div>
//             <div className="properties-grid">
//                 {currentProperties.map((home) => (
//                     <PropertyCart key={home.id} property={home} />
//                 ))}
//             </div>
            
//             {totalPages > 1 && (
//                 <div className="pagination">
//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//                         <button
//                             key={number}
//                             onClick={() => paginate(number)}
//                             className={`pagination-button ${currentPage === number ? 'active' : ''}`}
//                         >
//                             {number}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Properties;

import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import PropertyCart from './components/PropertyCart';
import SearchForm from './components/FilterProperty'; // Importamos el componente de búsqueda
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

    // Aplicar filtros cuando cambien los criterios de búsqueda
    useEffect(() => {
        let filtered = [...homes];
        
        // Filtrar por número de propiedades (si es diferente de "any number")
        if (propertyCount && propertyCount !== 'any number') {
            if (propertyCount === '5+') {
                filtered = filtered.filter(home => home.bedrooms >= 5);
            } else {
                filtered = filtered.filter(home => home.bedrooms === parseInt(propertyCount));
            }
        }
        
        // Filtrar por vecindario (si es diferente de "any neighbourhood")
        if (neighborhood && neighborhood !== 'any neighbourhood') {
            filtered = filtered.filter(home => 
                home.neighborhood.toLowerCase() === neighborhood.toLowerCase());
        }
        
        // Filtrar por presupuesto (si es diferente de "any")
        if (budget && budget !== 'any') {
            const budgetValue = parseInt(budget.replace(/[^0-9]/g, ''));
            
            if (budget.includes('+')) {
                filtered = filtered.filter(home => home.price >= budgetValue);
            } else {
                // Permitir un margen del 10% alrededor del presupuesto
                const minPrice = budgetValue * 0.9;
                const maxPrice = budgetValue * 1.1;
                filtered = filtered.filter(home => 
                    home.price >= minPrice && home.price <= maxPrice);
            }
        }
        
        setFilteredProperties(filtered);
        setCurrentPage(1); // Resetear a la primera página cuando cambian los filtros
    }, [propertyCount, neighborhood, budget]);

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
                    <div className="properties-count">
                        <p>{filteredProperties.length} properties found</p>
                    </div>
                    
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
                    <p>No properties match your criteria. Try adjusting your search filters.</p>
                </div>
            )}
        </div>
    );
}

export default Properties;