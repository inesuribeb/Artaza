import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import ArrowSvg from '../../../components/arrow/Arrow';
import './Glimpse.css';

function Glimpse() {
    const { t, getRoute } = useLanguage();

    const glimpseimages = [
        '/images/glimpse/7.webp',
        '/images/glimpse/1.webp',
        '/images/glimpse/2.webp',
        '/images/glimpse/3.webp',
        '/images/glimpse/4.webp',
        '/images/glimpse/5.webp',
        '/images/glimpse/6.webp',
        // '/images/glimpse/7.webp',
        '/images/glimpse/8.webp',
        '/images/glimpse/9.webp',
        '/images/glimpse/10.webp',
        '/images/glimpse/11.webp',
        '/images/glimpse/12.webp',
        '/images/glimpse/13.webp',
        '/images/glimpse/14.webp',
        '/images/glimpse/15.webp',
        '/images/glimpse/16.webp',
        '/images/glimpse/17.webp',
        '/images/glimpse/18.webp',
        '/images/glimpse/19.webp',
        '/images/glimpse/20.webp',
        '/images/glimpse/21.webp',
    ];

    const imagePaddings = [
        0, 20, 30, 0, 15,
        0, 25, 0, 20, 0,
        15, 0, 30, 0, 20,
        0, 15, 0, 25, 0, 20
    ];

    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            setScrollPosition(container.scrollLeft);
            setMaxScroll(container.scrollWidth - container.clientWidth);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='glimpse-wrapper'>
            <div className='view-container'>
                <button
                    className='scroll-arrow left-arrow'
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                >
                    &#8592;
                </button>

                <button
                    className='scroll-arrow right-arrow'
                    onClick={scrollRight}
                    aria-label="Scroll right"
                >
                    &#8594;
                </button>

                <div
                    className='glimpse-scrollable-content'
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                >
                    <div className='intro-content'>
                        <div className='intro-content-one'>
                        </div>
                        <Link to={getRoute('properties')} className="footer-text properties-link">
                            <h1 dangerouslySetInnerHTML={{ __html: t('compratitulo') }}></h1>
                            {t('botonproperties')}
                        </Link>

                    </div>

                    {glimpseimages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Property view ${index + 1}`}
                            className='glimpse-image'
                        />
                    ))}


                </div>

                <div className='scroll-progress'>
                    <div
                        className='progress-bar'
                        style={{
                            width: `${maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0}%`
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Glimpse;
