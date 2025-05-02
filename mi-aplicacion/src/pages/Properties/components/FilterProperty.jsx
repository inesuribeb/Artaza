import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useHeaderStyle } from '../../../components/Header/HeaderStyleContext';
import './FilterProperty.css';

const SearchForm = ({ onSearch }) => {
    const { t, currentLanguage } = useLanguage();
    // const { setHeaderClassName } = useHeaderStyle();

    // Estados para los valores seleccionados
    const [propertyCount, setPropertyCount] = useState(t('anyNumber'));
    const [neighborhood, setNeighborhood] = useState(t('anyNeighbourhood'));
    const [budget, setBudget] = useState(t('anyBudget'));

    // Estado para determinar si hay filtros activos
    const [hasActiveFilters, setHasActiveFilters] = useState(false);

    // Actualizar los estados cuando cambie el idioma
    useEffect(() => {
        setPropertyCount(t('anyNumber'));
        setNeighborhood(t('anyNeighbourhood'));
        setBudget(t('anyBudget'));
    }, [currentLanguage, t]);

    // Verificar si hay filtros activos
    useEffect(() => {
        const isFiltered =
            propertyCount !== t('anyNumber') ||
            neighborhood !== t('anyNeighbourhood') ||
            budget !== t('anyBudget');

        setHasActiveFilters(isFiltered);
    }, [propertyCount, neighborhood, budget, t]);
    
    // clase
    // useEffect(() => {
    //     setHeaderClassName('white-section-active');
        
    //     return () => setHeaderClassName('');
    //   }, [setHeaderClassName]);

    // Estado para controlar qué dropdown está abierto
    const [openDropdown, setOpenDropdown] = useState(null);

    // Referencias para los dropdowns
    const propertyCountRef = useRef(null);
    const neighborhoodRef = useRef(null);
    const budgetRef = useRef(null);

    // Datos para los dropdowns (usando t para traducción)
    const propertyOptions = [
        t('anyNumber'),
        t('onePlusBedroom'),
        t('twoPlusBedrooms'),
        t('threePlusBedrooms'),
        t('fourPlusBedrooms'),
        t('fivePlusBedrooms')
    ];

    const neighborhoodOptions = [
        t('anyNeighbourhood'),
        t('getxo'),
        t('leioa'),
        t('berango'),
        t('mungia')
    ];

    const budgetOptions = [
        t('anyBudget'),
        t('budget400to600'),
        t('budget600to800'),
        t('budget800to1M'),
        t('budget1MPlus')
    ];

    // Cerrar dropdown cuando se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                openDropdown === 'property' &&
                propertyCountRef.current &&
                !propertyCountRef.current.contains(event.target)
            ) {
                setOpenDropdown(null);
            } else if (
                openDropdown === 'neighborhood' &&
                neighborhoodRef.current &&
                !neighborhoodRef.current.contains(event.target)
            ) {
                setOpenDropdown(null);
            } else if (
                openDropdown === 'budget' &&
                budgetRef.current &&
                !budgetRef.current.contains(event.target)
            ) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    // Manejador para abrir/cerrar dropdown
    const toggleDropdown = (dropdown) => {
        if (openDropdown === dropdown) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdown);
        }
    };

    // Manejador para seleccionar una opción
    const handleSelect = (option, type) => {
        if (type === 'property') {
            setPropertyCount(option);
        } else if (type === 'neighborhood') {
            setNeighborhood(option);
        } else if (type === 'budget') {
            setBudget(option);
        }
        setOpenDropdown(null);
    };

    // Obtener resultados
    const handleViewResults = () => {
        if (onSearch) {
            onSearch(propertyCount, neighborhood, budget);
        }
    };

    // Resetear filtros
    const handleReset = () => {
        setPropertyCount(t('anyNumber'));
        setNeighborhood(t('anyNeighbourhood'));
        setBudget(t('anyBudget'));

        if (onSearch) {
            onSearch(t('anyNumber'), t('anyNeighbourhood'), t('anyBudget'));
        }
    };

    // Renderizado condicional según el idioma
    const renderSearchText = () => {
        if (currentLanguage === 'es') {
            return (
                <>
                    <h2 dangerouslySetInnerHTML={{ __html: t('search') }} />
                    <h1>
                        {t('lookingFor')}{' '}
                        <span className="dropdown-container" ref={propertyCountRef}>
                            <i onClick={() => toggleDropdown('property')}>
                                {propertyCount}
                                <span className="circle-button">
                                    {openDropdown === 'property' ? '−' : '+'}
                                </span>
                            </i>

                            {openDropdown === 'property' && (
                                <div className="dropdown-menu">
                                    {propertyOptions.map((option) => (
                                        <div
                                            key={option}
                                            className="dropdown-item"
                                            onClick={() => handleSelect(option, 'property')}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </span>{' '}
                        {t('propertyIn')}{' '}
                        <span className="dropdown-container" ref={neighborhoodRef}>
                            <i onClick={() => toggleDropdown('neighborhood')}>
                                {neighborhood}
                                <span className="circle-button">
                                    {openDropdown === 'neighborhood' ? '−' : '+'}
                                </span>
                            </i>

                            {openDropdown === 'neighborhood' && (
                                <div className="dropdown-menu">
                                    {neighborhoodOptions.map((option) => (
                                        <div
                                            key={option}
                                            className="dropdown-item"
                                            onClick={() => handleSelect(option, 'neighborhood')}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </span>{' '}
                        {t('andMyBudgetIs')}{' '}
                        <span className="dropdown-container" ref={budgetRef}>
                            <i onClick={() => toggleDropdown('budget')}>
                                {budget}
                                <span className="circle-button">
                                    {openDropdown === 'budget' ? '−' : '+'}
                                </span>
                            </i>

                            {openDropdown === 'budget' && (
                                <div className="dropdown-menu">
                                    {budgetOptions.map((option) => (
                                        <div
                                            key={option}
                                            className="dropdown-item"
                                            onClick={() => handleSelect(option, 'budget')}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </span>
                    </h1>
                </>
            );
        } else {
            return (
                <>
                    <h2 dangerouslySetInnerHTML={{ __html: t('search') }} />
                    <h1>
                        {t('lookingFor')}{' '}
                        <span className="dropdown-container" ref={propertyCountRef}>
                            <i onClick={() => toggleDropdown('property')}>
                                {propertyCount}
                                <span className="circle-button">
                                    {openDropdown === 'property' ? '−' : '+'}
                                </span>
                            </i>

                            {openDropdown === 'property' && (
                                <div className="dropdown-menu">
                                    {propertyOptions.map((option) => (
                                        <div
                                            key={option}
                                            className="dropdown-item"
                                            onClick={() => handleSelect(option, 'property')}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </span>{' '}
                        {t('propertyIn')}{' '}
                        <span className="dropdown-container" ref={neighborhoodRef}>
                            <i onClick={() => toggleDropdown('neighborhood')}>
                                {neighborhood}
                                <span className="circle-button">
                                    {openDropdown === 'neighborhood' ? '−' : '+'}
                                </span>
                            </i>

                            {openDropdown === 'neighborhood' && (
                                <div className="dropdown-menu">
                                    {neighborhoodOptions.map((option) => (
                                        <div
                                            key={option}
                                            className="dropdown-item"
                                            onClick={() => handleSelect(option, 'neighborhood')}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </span>{' '}
                        {t('andMyBudgetIs')}{' '}
                        <span className="dropdown-container" ref={budgetRef}>
                            <i onClick={() => toggleDropdown('budget')}>
                                {budget}
                                <span className="circle-button">
                                    {openDropdown === 'budget' ? '−' : '+'}
                                </span>
                            </i>

                            {openDropdown === 'budget' && (
                                <div className="dropdown-menu">
                                    {budgetOptions.map((option) => (
                                        <div
                                            key={option}
                                            className="dropdown-item"
                                            onClick={() => handleSelect(option, 'budget')}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </span>
                    </h1>
                </>
            );
        }
    };

    return (
        <div className="search-form">
            {renderSearchText()}
            <div className="button-container">
                <button onClick={handleViewResults} className="view-results-button">
                    {t('viewResults')}
                </button>
                <div className="reset-button-container">
                    {hasActiveFilters ? (
                        <button onClick={handleReset} className="reset-button">
                            {t('clear')}
                        </button>
                    ) : (
                        <div className="reset-button-placeholder"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchForm;