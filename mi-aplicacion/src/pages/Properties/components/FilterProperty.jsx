import React, { useState, useRef, useEffect } from 'react';
import './FilterProperty.css';

const SearchForm = ({ onSearch }) => {
    const [propertyCount, setPropertyCount] = useState('any number');
    const [neighborhood, setNeighborhood] = useState('any neighbourhood');
    const [budget, setBudget] = useState('any');

    const [openDropdown, setOpenDropdown] = useState(null);

    const propertyCountRef = useRef(null);
    const neighborhoodRef = useRef(null);
    const budgetRef = useRef(null);

    const propertyOptions = ['any number', '1+ bedroom', '2+ bedrooms', '3+ bedrooms', '4+ bedrooms', '5+ bedrooms'];
    const neighborhoodOptions = ['any neighbourhood', 'Downtown', 'Uptown', 'Midtown', 'Suburbs', 'Beachfront'];
    const budgetOptions = ['any', '€100,000', '€200,000', '€300,000', '€400,000', '€500,000+'];

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

    const toggleDropdown = (dropdown) => {
        if (openDropdown === dropdown) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdown);
        }
    };

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

    const handleViewResults = () => {
        if (onSearch) {
            onSearch(propertyCount, neighborhood, budget);
        }
    };

    return (
        // <div className="search-form">
        //     <h1>
        //         I am looking for a{' '}
        //         <span className="dropdown-container" ref={propertyCountRef}>
        //             <i onClick={() => toggleDropdown('property')}>
        //                 {propertyCount} {openDropdown === 'property' ? '−' : '+'}
        //             </i>

        //             {openDropdown === 'property' && (
        //                 <div className="dropdown-menu">
        //                     {propertyOptions.map((option) => (
        //                         <div
        //                             key={option}
        //                             className="dropdown-item"
        //                             onClick={() => handleSelect(option, 'property')}
        //                         >
        //                             {option}
        //                         </div>
        //                     ))}
        //                 </div>
        //             )}
        //         </span>{' '}
        //         property in{' '}
        //         <span className="dropdown-container" ref={neighborhoodRef}>
        //             <i onClick={() => toggleDropdown('neighborhood')}>
        //                 {neighborhood} {openDropdown === 'neighborhood' ? '−' : '+'}
        //             </i>

        //             {openDropdown === 'neighborhood' && (
        //                 <div className="dropdown-menu">
        //                     {neighborhoodOptions.map((option) => (
        //                         <div
        //                             key={option}
        //                             className="dropdown-item"
        //                             onClick={() => handleSelect(option, 'neighborhood')}
        //                         >
        //                             {option}
        //                         </div>
        //                     ))}
        //                 </div>
        //             )}
        //         </span>{' '}
        //         and my budget is approximately{' '}
        //         <span className="dropdown-container" ref={budgetRef}>
        //             <i onClick={() => toggleDropdown('budget')}>
        //                 {budget} {openDropdown === 'budget' ? '−' : '+'}
        //             </i>

        //             {openDropdown === 'budget' && (
        //                 <div className="dropdown-menu">
        //                     {budgetOptions.map((option) => (
        //                         <div
        //                             key={option}
        //                             className="dropdown-item"
        //                             onClick={() => handleSelect(option, 'budget')}
        //                         >
        //                             {option}
        //                         </div>
        //                     ))}
        //                 </div>
        //             )}
        //         </span>
        //     </h1>

        //     <button onClick={handleViewResults} className="view-results-button">
        //         View results
        //     </button>
        // </div>
        <div className="search-form">
            <h1>
                I am looking for a{' '}
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
                property in{' '}
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
                and my budget is approximately{' '}
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

            <button onClick={handleViewResults} className="view-results-button">
                View results
            </button>
        </div>

    );
};

export default SearchForm;