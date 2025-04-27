import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import PropertyCart from './components/PropertyCart';
import { homes } from '../../utils/Homes';
import './Properties.css'

function Properties() {
    const { t } = useLanguage();
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 9;

    // Cálculos para la paginación
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = homes.slice(indexOfFirstProperty, indexOfLastProperty);
    const totalPages = Math.ceil(homes.length / propertiesPerPage);

    // Cambiar página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="properties-container">
            <div className="properties-grid">
                {currentProperties.map((home) => (
                    <PropertyCart key={home.id} property={home} />
                ))}
            </div>
            
            {/* Paginación */}
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
        </div>
    );
}

export default Properties;