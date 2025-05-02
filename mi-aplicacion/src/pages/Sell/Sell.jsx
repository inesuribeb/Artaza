import { useEffect, useRef } from 'react';
import SellForm from './components/SellForm';
import { useHeaderStyle } from '../../components/Header/HeaderStyleContext';
import './Sell.css';

function Sell() {
    const { setHeaderClassName } = useHeaderStyle();
    const backgroundRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (backgroundRef.current) {
                const backgroundRect = backgroundRef.current.getBoundingClientRect();
                const headerHeight = 80; 

                if (headerHeight < backgroundRect.bottom) {
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

    return (
        <div className='sell-wrapper'>
            <div className='sell-page-background' ref={backgroundRef}>
            </div>
            <SellForm />
        </div>
    );
}

export default Sell;